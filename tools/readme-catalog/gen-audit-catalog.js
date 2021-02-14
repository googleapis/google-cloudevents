import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getGeneratedStringWithReplacement } from './common.js';

/**
 * Generates a Cloud Audit Log catalog markdown for the README.
 * @example Example input:
 * [{
 *   serviceName: 'workflows.googleapis.com',
 *   displayName: 'Workflows',
 *   methods: [
 *     {
 *       methodName: 'google.cloud.workflows.v1.Workflows.CreateWorkflow',
 *       lastAdded: '1607367890'
 *     },
 *   ]
 * },
 *   ...
 * ]
 * {@link ../../json/audit/service_catalog.json}
 */
const __dirname = dirname(fileURLToPath(import.meta.url));
const CATALOG = JSON.parse(fs.readFileSync(`${__dirname}/../../json/audit/service_catalog.json`));

/**
 * Generates the Cloud Audit Log discovery documentation at AUDIT_CATALOG.md.
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
 * @param {object} calEntry A single 
 * @returns {string} Markdown with info about this CAL entry
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