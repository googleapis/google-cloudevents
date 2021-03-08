import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getGeneratedStringWithReplacement } from './common.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
/**
 * The const `CATALOG` contains an object with a Cloud Audit Log catalog.
 * This data is used for generating the audit log catalog.
 * @example
 * [{
 *   "serviceName": "workflows.googleapis.com",
 *   "displayName": "Workflows",
 *   "methods": [
 *     {
 *       "methodName": "google.cloud.workflows.v1.Workflows.CreateWorkflow",
 *       "lastAdded": "1607367890"
 *     },
 *   ]
 * },
 *   ...
 * ]
 * {@link ../../json/audit/service_catalog.json}
 */
const CATALOG = JSON.parse(fs.readFileSync(`${__dirname}/../../json/audit/service_catalog.json`));

/**
 * Generates markdown containing a Cloud Audit Log catalog
 * and saves the markdown in the file called `AUDIT_CATALOG.md`.
 */
export const genAuditCatalog = () => {
  // Update README
  const AUDIT_CATALOG_PATH = `${__dirname}/../../AUDIT_CATALOG.md`;
  const auditCatalogContents = fs.readFileSync(AUDIT_CATALOG_PATH).toString();
  const replacementString = CATALOG.services.map(getServiceCatalogEntryMarkdown).join('');
  const updatedReadmeContents = getGeneratedStringWithReplacement(auditCatalogContents, replacementString);

  console.log(updatedReadmeContents);

  // Save updated README
  fs.writeFileSync(AUDIT_CATALOG_PATH, updatedReadmeContents);
  console.log('- Updated README.');
};

/**
 * Gets markdown for a CAL service catalog entry.
 * @param {object} calEntry A single Cloud Audit Log entry.
 * @returns {string} Markdown with info about this CAL entry.
 */
const getServiceCatalogEntryMarkdown = (calEntry) => {
  return `### ${calEntry.displayName}

#### \`serviceName\`

- \`${calEntry.serviceName}\`

#### \`methodName\`

${calEntry.methods.map((method => {
  return `- \`${method.methodName}\``;
})).join('\n')}

`;
};