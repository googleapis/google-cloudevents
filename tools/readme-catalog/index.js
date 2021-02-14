import {genAuditCatalog} from './gen-audit-catalog.js';
import {genCloudEventCatalog} from './gen-cloudevent-catalog.js';

/**
 * Generate and update the READMEs.
 */
genAuditCatalog();
genCloudEventCatalog();