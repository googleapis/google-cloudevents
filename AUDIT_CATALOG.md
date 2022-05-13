# Cloud Audit Log Catalog

This file includes a directory of Cloud Audit Log `serviceName` and `methodName`.

## Example usage

These Cloud Audit Log values can be used to create Eventarc triggers for Audit Log events like such:

```sh
# Get the current project number:
PROJECT_NUMBER=$(gcloud projects describe $(gcloud config get-value project) --format='value(projectNumber)')

# Replace "my-run-service" with your Run service.
# Replace "serviceName"  and "methodName" values:
gcloud eventarc triggers create my-trigger \
--destination-run-service=my-run-service \
--service-account=${PROJECT_NUMBER}-compute@developer.gserviceaccount.com \
--event-filters="type=google.cloud.audit.log.v1.written" \
--event-filters="serviceName=storage.googleapis.com" \
--event-filters="methodName=storage.objects.create"
```

## Cloud Audit Log Types

<!-- GENERATED START -->
### Access Approval

#### `serviceName`

- `accessapproval.googleapis.com`

#### `methodName`

- `google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest`
- `google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings`
- `google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest`
- `google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings`

### Access Context Manager

#### `serviceName`

- `accesscontextmanager.googleapis.com`

#### `methodName`

- `google.identity.accesscontextmanager.v1.AccessContextManager.CommitServicePerimeters`
- `google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessLevel`
- `google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessPolicy`
- `google.identity.accesscontextmanager.v1.AccessContextManager.CreateGcpUserAccessBinding`
- `google.identity.accesscontextmanager.v1.AccessContextManager.CreateServicePerimeter`
- `google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessLevel`
- `google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessPolicy`
- `google.identity.accesscontextmanager.v1.AccessContextManager.DeleteGcpUserAccessBinding`
- `google.identity.accesscontextmanager.v1.AccessContextManager.DeleteServicePerimeter`
- `google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessLevel`
- `google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessPolicy`
- `google.identity.accesscontextmanager.v1.AccessContextManager.GetGcpUserAccessBinding`
- `google.identity.accesscontextmanager.v1.AccessContextManager.GetIamPolicy`
- `google.identity.accesscontextmanager.v1.AccessContextManager.GetServicePerimeter`
- `google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessLevels`
- `google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessPolicies`
- `google.identity.accesscontextmanager.v1.AccessContextManager.ListGcpUserAccessBindings`
- `google.identity.accesscontextmanager.v1.AccessContextManager.ListServicePerimeters`
- `google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceAccessLevels`
- `google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceServicePerimeters`
- `google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessLevel`
- `google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessPolicy`
- `google.identity.accesscontextmanager.v1.AccessContextManager.UpdateGcpUserAccessBinding`
- `google.identity.accesscontextmanager.v1.AccessContextManager.UpdateServicePerimeter`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.CreateAccessLevel`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.CreateAccessPolicy`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.CreateServicePerimeter`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.DeleteAccessLevel`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.DeleteAccessPolicy`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.DeleteServicePerimeter`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.GetAccessLevel`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.GetServicePerimeter`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.ListAccessLevels`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.ListServicePerimeters`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.ReplaceAccessLevels`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.ReplaceServicePerimeters`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.UpdateAccessLevel`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.UpdateAccessPolicy`
- `google.identity.accesscontextmanager.v1beta.AccessContextManager.UpdateServicePerimeter`

### Google Workspace Admin

#### `serviceName`

- `admin.googleapis.com`

#### `methodName`

- `google.admin.AdminService.actionCancelled`
- `google.admin.AdminService.actionRequested`
- `google.admin.AdminService.addAddressbookGroups`
- `google.admin.AdminService.addApplication`
- `google.admin.AdminService.addDomainAlias`
- `google.admin.AdminService.addGroupMember`
- `google.admin.AdminService.addLdapApplicationCertificate`
- `google.admin.AdminService.addLdapApplicationCredentials`
- `google.admin.AdminService.addMobileApplicationToWhitelist`
- `google.admin.AdminService.addNickname`
- `google.admin.AdminService.addPrivilege`
- `google.admin.AdminService.addRecoveryEmail`
- `google.admin.AdminService.addRecoveryPhone`
- `google.admin.AdminService.addSecondaryDomain`
- `google.admin.AdminService.addToBlockedOauth2Apps`
- `google.admin.AdminService.addToTrustedOauth2Apps`
- `google.admin.AdminService.addTrustedDomains`
- `google.admin.AdminService.alertCenterBatchDeleteAlerts`
- `google.admin.AdminService.alertCenterBatchUndeleteAlerts`
- `google.admin.AdminService.alertCenterCreateFeedback`
- `google.admin.AdminService.alertCenterDeleteAlert`
- `google.admin.AdminService.alertCenterGetAlertMetadata`
- `google.admin.AdminService.alertCenterGetCustomerSettings`
- `google.admin.AdminService.alertCenterGetSitLink`
- `google.admin.AdminService.alertCenterListChange`
- `google.admin.AdminService.alertCenterListFeedback`
- `google.admin.AdminService.alertCenterListRelatedAlerts`
- `google.admin.AdminService.alertCenterUndeleteAlert`
- `google.admin.AdminService.alertCenterUpdateAlertMetadata`
- `google.admin.AdminService.alertCenterUpdateCustomerSettings`
- `google.admin.AdminService.alertCenterView`
- `google.admin.AdminService.alertHangoutsDevice`
- `google.admin.AdminService.alertStatusChanged`
- `google.admin.AdminService.allowServiceForOauth2Access`
- `google.admin.AdminService.allowStrongAuthentication`
- `google.admin.AdminService.appleDepTokenSetupComplete`
- `google.admin.AdminService.archiveUser`
- `google.admin.AdminService.assignCustomLogo`
- `google.admin.AdminService.assignRole`
- `google.admin.AdminService.authorizeApiClientAccess`
- `google.admin.AdminService.autoProvConfigAttributeMappingRemoved`
- `google.admin.AdminService.autoProvConfigAttributeMappingUpdated`
- `google.admin.AdminService.autoProvConfigGroupNameAdded`
- `google.admin.AdminService.autoProvConfigGroupRestrictionDeactivated`
- `google.admin.AdminService.autoProvDeprovActionRemoved`
- `google.admin.AdminService.blockAllThirdPartyApiAccess`
- `google.admin.AdminService.cancelAlertHangoutsDevice`
- `google.admin.AdminService.cancelCalendarEvents`
- `google.admin.AdminService.cancelUserInvite`
- `google.admin.AdminService.changeAlertCriteria`
- `google.admin.AdminService.changeAllowedTwoStepVerificationMethods`
- `google.admin.AdminService.changeApplicationSetting`
- `google.admin.AdminService.changeCaaAppAssignments`
- `google.admin.AdminService.changeCaaErrorMessage`
- `google.admin.AdminService.changeCalendarSetting`
- `google.admin.AdminService.changeChatSetting`
- `google.admin.AdminService.changeChromeOsAndroidApplicationSetting`
- `google.admin.AdminService.changeChromeOsApplicationSetting`
- `google.admin.AdminService.changeChromeOsDeviceSetting`
- `google.admin.AdminService.changeChromeOsPublicSessionSetting`
- `google.admin.AdminService.changeChromeOsUserSetting`
- `google.admin.AdminService.changeChromeOsWebApplicationSetting`
- `google.admin.AdminService.changeCustomUserSchemaDescription`
- `google.admin.AdminService.changeCustomUserSchemaDisplayName`
- `google.admin.AdminService.changeDataLocalizationForRussia`
- `google.admin.AdminService.changeDeviceState`
- `google.admin.AdminService.changeDocsSetting`
- `google.admin.AdminService.changeDomainDefaultLocale`
- `google.admin.AdminService.changeDomainDefaultTimezone`
- `google.admin.AdminService.changeDomainSupportMessage`
- `google.admin.AdminService.changeEduType`
- `google.admin.AdminService.changeEmailSetting`
- `google.admin.AdminService.changeFirstName`
- `google.admin.AdminService.changeGmailSetting`
- `google.admin.AdminService.changeGroupDescription`
- `google.admin.AdminService.changeGroupName`
- `google.admin.AdminService.changeGroupSetting`
- `google.admin.AdminService.changeGroupsForBusinessSetting`
- `google.admin.AdminService.changeHangoutsDeviceAnnotation`
- `google.admin.AdminService.changeHangoutsDeviceCalendarAssignment`
- `google.admin.AdminService.changeHangoutsDeviceSetting`
- `google.admin.AdminService.changeHangoutsDeviceState`
- `google.admin.AdminService.changeLastName`
- `google.admin.AdminService.changeLdapApplicationAuthenticationSettings`
- `google.admin.AdminService.changeLdapApplicationCertificateName`
- `google.admin.AdminService.changeLdapApplicationDescription`
- `google.admin.AdminService.changeLdapApplicationGroupSearchSettings`
- `google.admin.AdminService.changeLdapApplicationName`
- `google.admin.AdminService.changeLdapApplicationUserSearchSettings`
- `google.admin.AdminService.changeLicenseAutoAssign`
- `google.admin.AdminService.changeMobileApplicationPermissionGrant`
- `google.admin.AdminService.changeMobileApplicationPriorityOrder`
- `google.admin.AdminService.changeMobileApplicationSettings`
- `google.admin.AdminService.changeMobileSetting`
- `google.admin.AdminService.changeOrganizationName`
- `google.admin.AdminService.changePassword`
- `google.admin.AdminService.changePasswordOnNextLogin`
- `google.admin.AdminService.changePrimaryDomain`
- `google.admin.AdminService.changeRecoveryEmail`
- `google.admin.AdminService.changeRecoveryPhone`
- `google.admin.AdminService.changeRenewDomainRegistration`
- `google.admin.AdminService.changeResellerAccess`
- `google.admin.AdminService.changeRuleCriteria`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigAcsEndpoint`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigAttribute`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigDescription`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigEntityId`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigIdMapping`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigLogo`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigName`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigNameidFormat`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigSignResponse`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigStartUrl`
- `google.admin.AdminService.changeSaml2ServiceProviderConfigVersionId`
- `google.admin.AdminService.changeSitesSetting`
- `google.admin.AdminService.changeSsoSettings`
- `google.admin.AdminService.changeTwoStepVerificationEnrollmentPeriodDuration`
- `google.admin.AdminService.changeTwoStepVerificationFrequency`
- `google.admin.AdminService.changeTwoStepVerificationGracePeriodDuration`
- `google.admin.AdminService.changeTwoStepVerificationStartDate`
- `google.admin.AdminService.changeUserAddress`
- `google.admin.AdminService.changeUserCustomField`
- `google.admin.AdminService.changeUserExternalId`
- `google.admin.AdminService.changeUserGender`
- `google.admin.AdminService.changeUserIm`
- `google.admin.AdminService.changeUserKeyword`
- `google.admin.AdminService.changeUserLanguage`
- `google.admin.AdminService.changeUserLocation`
- `google.admin.AdminService.changeUserOrganization`
- `google.admin.AdminService.changeUserPhoneNumber`
- `google.admin.AdminService.changeUserRelation`
- `google.admin.AdminService.chromeAppLicensesEnabled`
- `google.admin.AdminService.chromeAppUserLicenseAssigned`
- `google.admin.AdminService.chromeConnectorConfigurationChange`
- `google.admin.AdminService.chromeLicensesPurchased`
- `google.admin.AdminService.chromeLicensesRedeemed`
- `google.admin.AdminService.cleanCalendarResourceCalendarEvents`
- `google.admin.AdminService.communicationPreferencesSettingChange`
- `google.admin.AdminService.companyDeviceDeletion`
- `google.admin.AdminService.companyDevicesBulkCreation`
- `google.admin.AdminService.createAccessLevelV2`
- `google.admin.AdminService.createAddressbook`
- `google.admin.AdminService.createAlert`
- `google.admin.AdminService.createApplicationSetting`
- `google.admin.AdminService.createAutoProvConfig`
- `google.admin.AdminService.createBuilding`
- `google.admin.AdminService.createCalendarResource`
- `google.admin.AdminService.createCalendarResourceFeature`
- `google.admin.AdminService.createCalendarResourceMaintenanceEvent`
- `google.admin.AdminService.createCertificate`
- `google.admin.AdminService.createCustomUserField`
- `google.admin.AdminService.createCustomUserSchema`
- `google.admin.AdminService.createDataTransferRequest`
- `google.admin.AdminService.createDeviceEnrollmentToken`
- `google.admin.AdminService.createDlpDetector`
- `google.admin.AdminService.createEmailMonitor`
- `google.admin.AdminService.createGmailSetting`
- `google.admin.AdminService.createGroup`
- `google.admin.AdminService.createLdapApplication`
- `google.admin.AdminService.createManagedConfiguration`
- `google.admin.AdminService.createNetwork`
- `google.admin.AdminService.createOrgUnit`
- `google.admin.AdminService.createRole`
- `google.admin.AdminService.createRule`
- `google.admin.AdminService.createSaml2ServiceProviderConfig`
- `google.admin.AdminService.createSaml2ServiceProviderConfigAttribute`
- `google.admin.AdminService.createTransferToken`
- `google.admin.AdminService.createUser`
- `google.admin.AdminService.createUserWithAutoProv`
- `google.admin.AdminService.customerTakeoutCreated`
- `google.admin.AdminService.customerTakeoutSucceeded`
- `google.admin.AdminService.delete2svScratchCodes`
- `google.admin.AdminService.deleteAccessLevelV2`
- `google.admin.AdminService.deleteAddressbook`
- `google.admin.AdminService.deleteApplicationSetting`
- `google.admin.AdminService.deleteAutoProvConfig`
- `google.admin.AdminService.deleteAutoProvisionedUser`
- `google.admin.AdminService.deleteBigqueryExportConfiguration`
- `google.admin.AdminService.deleteBuilding`
- `google.admin.AdminService.deleteCalendarResource`
- `google.admin.AdminService.deleteCalendarResourceFeature`
- `google.admin.AdminService.deleteCalendarResourceMaintenanceEvent`
- `google.admin.AdminService.deleteCertificate`
- `google.admin.AdminService.deleteChromeBrowser`
- `google.admin.AdminService.deleteChromeOsPrintServer`
- `google.admin.AdminService.deleteChromeOsPrinter`
- `google.admin.AdminService.deleteCustomUserField`
- `google.admin.AdminService.deleteCustomUserSchema`
- `google.admin.AdminService.deleteDlpDetector`
- `google.admin.AdminService.deleteEmailMonitor`
- `google.admin.AdminService.deleteGmailSetting`
- `google.admin.AdminService.deleteGroup`
- `google.admin.AdminService.deleteLdapApplication`
- `google.admin.AdminService.deleteLdapApplicationCertificate`
- `google.admin.AdminService.deleteLdapApplicationCredentials`
- `google.admin.AdminService.deleteManagedConfiguration`
- `google.admin.AdminService.deleteProfilePhoto`
- `google.admin.AdminService.deleteRole`
- `google.admin.AdminService.deleteRule`
- `google.admin.AdminService.deleteSaml2ServiceProviderConfig`
- `google.admin.AdminService.deleteSaml2ServiceProviderConfigAttribute`
- `google.admin.AdminService.deleteUser`
- `google.admin.AdminService.deviceListDownload`
- `google.admin.AdminService.disallowServiceForOauth2Access`
- `google.admin.AdminService.downgradeUserFromGplus`
- `google.admin.AdminService.downloadLdapApplicationCertificate`
- `google.admin.AdminService.downloadUnmanagedUsersList`
- `google.admin.AdminService.downloadUserlistCsv`
- `google.admin.AdminService.driveDataRestore`
- `google.admin.AdminService.dropFromQuarantine`
- `google.admin.AdminService.editOrgUnitDescription`
- `google.admin.AdminService.editOrgUnitName`
- `google.admin.AdminService.emailLogSearch`
- `google.admin.AdminService.emailUndelete`
- `google.admin.AdminService.enableDirectorySync`
- `google.admin.AdminService.enableUserIpWhitelist`
- `google.admin.AdminService.enforceStrongAuthentication`
- `google.admin.AdminService.ewsInNewCredentialsGenerated`
- `google.admin.AdminService.ewsOutEndpointConfigurationChanged`
- `google.admin.AdminService.ewsOutEndpointConfigurationReset`
- `google.admin.AdminService.exitMigration`
- `google.admin.AdminService.generate2svScratchCodes`
- `google.admin.AdminService.generateCertificate`
- `google.admin.AdminService.gmailResetUser`
- `google.admin.AdminService.grantAdminPrivilege`
- `google.admin.AdminService.groupMemberBulkUpload`
- `google.admin.AdminService.groupMembersDownload`
- `google.admin.AdminService.hardDeletedAutoProvisionedUser`
- `google.admin.AdminService.insertChromeOsPrintServer`
- `google.admin.AdminService.insertChromeOsPrinter`
- `google.admin.AdminService.issueDeviceCommand`
- `google.admin.AdminService.licenseUsageUpdate`
- `google.admin.AdminService.mailRoutingDestinationRemoved`
- `google.admin.AdminService.makeNetworkInherited`
- `google.admin.AdminService.meetInteropCreateGateway`
- `google.admin.AdminService.meetInteropDeleteGateway`
- `google.admin.AdminService.meetInteropModifyGateway`
- `google.admin.AdminService.migrationSetup`
- `google.admin.AdminService.migrationSpeedUpdate`
- `google.admin.AdminService.mobileDeviceDelete`
- `google.admin.AdminService.moveChromeBrowserToOrgUnitDetailed`
- `google.admin.AdminService.moveDeviceToOrgUnitDetailed`
- `google.admin.AdminService.moveEntityToOrg`
- `google.admin.AdminService.moveOrgUnit`
- `google.admin.AdminService.moveSharedDriveToOrgUnit`
- `google.admin.AdminService.moveUserToOrgUnit`
- `google.admin.AdminService.preProvisionChromeOsDevice`
- `google.admin.AdminService.rejectFromQuarantine`
- `google.admin.AdminService.releaseCalendarResources`
- `google.admin.AdminService.releaseFromQuarantine`
- `google.admin.AdminService.removeApiClientAccess`
- `google.admin.AdminService.removeApplication`
- `google.admin.AdminService.removeCertificate`
- `google.admin.AdminService.removeChromeOsApplicationSetting`
- `google.admin.AdminService.removeDomainAlias`
- `google.admin.AdminService.removeFromBlockedOauth2Apps`
- `google.admin.AdminService.removeFromTrustedOauth2Apps`
- `google.admin.AdminService.removeGroupMember`
- `google.admin.AdminService.removeMobileApplicationFromWhitelist`
- `google.admin.AdminService.removeNetwork`
- `google.admin.AdminService.removeNickname`
- `google.admin.AdminService.removeOrgUnit`
- `google.admin.AdminService.removePrivilege`
- `google.admin.AdminService.removeRecoveryEmail`
- `google.admin.AdminService.removeRecoveryPhone`
- `google.admin.AdminService.removeSecondaryDomain`
- `google.admin.AdminService.removeTrustedDomains`
- `google.admin.AdminService.renameRole`
- `google.admin.AdminService.renameRule`
- `google.admin.AdminService.renameUser`
- `google.admin.AdminService.reorderGroupBasedPoliciesEvent`
- `google.admin.AdminService.requestMailboxDump`
- `google.admin.AdminService.resendUserInvite`
- `google.admin.AdminService.resetSigninCookies`
- `google.admin.AdminService.revoke3loToken`
- `google.admin.AdminService.revokeAdminPrivilege`
- `google.admin.AdminService.revokeAsp`
- `google.admin.AdminService.revokeDeviceEnrollmentToken`
- `google.admin.AdminService.revokeSecurityKey`
- `google.admin.AdminService.revokeTransferToken`
- `google.admin.AdminService.ruleActionsChanged`
- `google.admin.AdminService.ruleStatusChanged`
- `google.admin.AdminService.securityCenterRuleActionCompletion`
- `google.admin.AdminService.securityCenterRuleCreation`
- `google.admin.AdminService.securityCenterRuleDeletion`
- `google.admin.AdminService.securityCenterRuleModification`
- `google.admin.AdminService.securityCenterRuleThresholdTrigger`
- `google.admin.AdminService.securityChartDrilldown`
- `google.admin.AdminService.securityChartDrilldownExport`
- `google.admin.AdminService.securityChartExport`
- `google.admin.AdminService.securityInvestigationAction`
- `google.admin.AdminService.securityInvestigationActionCancellation`
- `google.admin.AdminService.securityInvestigationActionCompletion`
- `google.admin.AdminService.securityInvestigationActionRetry`
- `google.admin.AdminService.securityInvestigationChartCreate`
- `google.admin.AdminService.securityInvestigationContentAccess`
- `google.admin.AdminService.securityInvestigationDownloadAttachment`
- `google.admin.AdminService.securityInvestigationExportActionResults`
- `google.admin.AdminService.securityInvestigationExportQuery`
- `google.admin.AdminService.securityInvestigationObjectCreateDraftInvestigation`
- `google.admin.AdminService.securityInvestigationObjectDeleteInvestigation`
- `google.admin.AdminService.securityInvestigationObjectDuplicateInvestigation`
- `google.admin.AdminService.securityInvestigationObjectSaveInvestigation`
- `google.admin.AdminService.securityInvestigationObjectUpdateDirectSharing`
- `google.admin.AdminService.securityInvestigationObjectUpdateLinkSharing`
- `google.admin.AdminService.securityInvestigationQuery`
- `google.admin.AdminService.securityInvestigationSettingUpdate`
- `google.admin.AdminService.securityKeyRegisteredForUser`
- `google.admin.AdminService.sendHangoutsDeviceCommand`
- `google.admin.AdminService.sessionControlSettingsChange`
- `google.admin.AdminService.skipDomainAliasMx`
- `google.admin.AdminService.skipSecondaryDomainMx`
- `google.admin.AdminService.suspendAutoProvisionedUser`
- `google.admin.AdminService.suspendUser`
- `google.admin.AdminService.systemDefinedRuleUpdated`
- `google.admin.AdminService.toggleAutoAddNewService`
- `google.admin.AdminService.toggleAutomaticContactSharing`
- `google.admin.AdminService.toggleCaaEnablement`
- `google.admin.AdminService.toggleNewAppFeatures`
- `google.admin.AdminService.toggleServiceEnabled`
- `google.admin.AdminService.toggleSsoEnabled`
- `google.admin.AdminService.trustDomainOwnedOauth2Apps`
- `google.admin.AdminService.trustRulesOptIn`
- `google.admin.AdminService.turnOffBigqueryExport`
- `google.admin.AdminService.turnOnBigqueryExport`
- `google.admin.AdminService.unarchiveUser`
- `google.admin.AdminService.unassignCustomLogo`
- `google.admin.AdminService.unassignRole`
- `google.admin.AdminService.unblockAllThirdPartyApiAccess`
- `google.admin.AdminService.unblockUserSession`
- `google.admin.AdminService.undeleteUser`
- `google.admin.AdminService.unenrollUserFromStrongAuth`
- `google.admin.AdminService.unenrollUserFromTitanium`
- `google.admin.AdminService.unmanagedUsersBulkUpload`
- `google.admin.AdminService.unsuspendAutoProvisionedUser`
- `google.admin.AdminService.unsuspendUser`
- `google.admin.AdminService.untrustDomainOwnedOauth2Apps`
- `google.admin.AdminService.updateAccessLevelV2`
- `google.admin.AdminService.updateAddressbookName`
- `google.admin.AdminService.updateAutoProvConfigConnectionUrl`
- `google.admin.AdminService.updateAutoProvConfigCredentials`
- `google.admin.AdminService.updateAutoProvStatus`
- `google.admin.AdminService.updateAutoProvisionedUser`
- `google.admin.AdminService.updateBigqueryExport`
- `google.admin.AdminService.updateBirthdate`
- `google.admin.AdminService.updateBuilding`
- `google.admin.AdminService.updateCalendarResource`
- `google.admin.AdminService.updateCalendarResourceCalendarAcl`
- `google.admin.AdminService.updateCalendarResourceFeature`
- `google.admin.AdminService.updateCalendarResourceMaintenanceEvent`
- `google.admin.AdminService.updateCertificate`
- `google.admin.AdminService.updateChromeBrowser`
- `google.admin.AdminService.updateChromeOsPrintServer`
- `google.admin.AdminService.updateChromeOsPrinter`
- `google.admin.AdminService.updateCustomUserField`
- `google.admin.AdminService.updateDevice`
- `google.admin.AdminService.updateDlpDetectorValue`
- `google.admin.AdminService.updateDomainPrimaryAdminEmail`
- `google.admin.AdminService.updateDomainSecondaryEmail`
- `google.admin.AdminService.updateDynamicLicense`
- `google.admin.AdminService.updateErrorMsgForRestrictedOauth2Apps`
- `google.admin.AdminService.updateGlobalNetworkPolicy`
- `google.admin.AdminService.updateGroupMember`
- `google.admin.AdminService.updateGroupMemberDeliverySettings`
- `google.admin.AdminService.updateManagedConfiguration`
- `google.admin.AdminService.updateNetwork`
- `google.admin.AdminService.updateProfilePhoto`
- `google.admin.AdminService.updateRemoteDirectory`
- `google.admin.AdminService.updateRule`
- `google.admin.AdminService.updateSmartFeatures`
- `google.admin.AdminService.updateSyncJob`
- `google.admin.AdminService.upgradeUserToGplus`
- `google.admin.AdminService.userEnrolledInTwoStepVerification`
- `google.admin.AdminService.userInvite`
- `google.admin.AdminService.userLicenseAssignment`
- `google.admin.AdminService.userLicenseRevoke`
- `google.admin.AdminService.userPutInTwoStepVerificationGracePeriod`
- `google.admin.AdminService.usersBulkUpload`
- `google.admin.AdminService.usersBulkUploadNotificationSent`
- `google.admin.AdminService.verifyDomainAlias`
- `google.admin.AdminService.verifySecondaryDomain`
- `google.admin.AdminService.viewDnsLoginDetails`
- `google.admin.AdminService.viewSiteDetails`
- `google.admin.AdminService.weakProgrammaticLoginSettingsChanged`
- `google.admin.AdminService.whitelistedGroupsUpdated`

### AI Platform (under Vertex AI)

#### `serviceName`

- `aiplatform.googleapis.com`

#### `methodName`

- `google.cloud.aiplatform.ui.DatasetService.AddAnnotationSpecsToSavedQuery`
- `google.cloud.aiplatform.ui.DatasetService.BatchDeleteDataItems`
- `google.cloud.aiplatform.ui.DatasetService.BatchEditAnnotations`
- `google.cloud.aiplatform.ui.DatasetService.BatchUpdateDataItems`
- `google.cloud.aiplatform.ui.DatasetService.CreateDataset`
- `google.cloud.aiplatform.ui.DatasetService.CreateSavedQuery`
- `google.cloud.aiplatform.ui.DatasetService.DeleteDataset`
- `google.cloud.aiplatform.ui.DatasetService.DeleteSavedQuery`
- `google.cloud.aiplatform.ui.DatasetService.ExportData`
- `google.cloud.aiplatform.ui.DatasetService.GetDataset`
- `google.cloud.aiplatform.ui.DatasetService.GetSavedQuery`
- `google.cloud.aiplatform.ui.DatasetService.ImportData`
- `google.cloud.aiplatform.ui.DatasetService.ListAnnotationSpecs`
- `google.cloud.aiplatform.ui.DatasetService.ListAnnotations`
- `google.cloud.aiplatform.ui.DatasetService.ListColumnSpecs`
- `google.cloud.aiplatform.ui.DatasetService.ListDataItems`
- `google.cloud.aiplatform.ui.DatasetService.ListDatasets`
- `google.cloud.aiplatform.ui.DatasetService.ListSavedQueries`
- `google.cloud.aiplatform.ui.DatasetService.RemoveAnnotationSpecFromSavedQuery`
- `google.cloud.aiplatform.ui.DatasetService.SearchDataItems`
- `google.cloud.aiplatform.ui.DatasetService.UpdateAnnotationSpec`
- `google.cloud.aiplatform.ui.DatasetService.UpdateDataset`
- `google.cloud.aiplatform.ui.DatasetService.UpdateSavedQuery`
- `google.cloud.aiplatform.ui.EndpointService.CreateEndpoint`
- `google.cloud.aiplatform.ui.EndpointService.DeleteEndpoint`
- `google.cloud.aiplatform.ui.EndpointService.DeployModel`
- `google.cloud.aiplatform.ui.EndpointService.GetEndpoint`
- `google.cloud.aiplatform.ui.EndpointService.ListEndpoints`
- `google.cloud.aiplatform.ui.EndpointService.UndeployModel`
- `google.cloud.aiplatform.ui.EndpointService.UpdateEndpoint`
- `google.cloud.aiplatform.ui.FeaturestoreService.BatchCreateFeatures`
- `google.cloud.aiplatform.ui.FeaturestoreService.CreateEntityType`
- `google.cloud.aiplatform.ui.FeaturestoreService.CreateFeaturestore`
- `google.cloud.aiplatform.ui.FeaturestoreService.DeleteEntityType`
- `google.cloud.aiplatform.ui.FeaturestoreService.DeleteFeature`
- `google.cloud.aiplatform.ui.FeaturestoreService.GetEntityType`
- `google.cloud.aiplatform.ui.FeaturestoreService.GetFeature`
- `google.cloud.aiplatform.ui.FeaturestoreService.GetFeaturestore`
- `google.cloud.aiplatform.ui.FeaturestoreService.ImportFeatureValues`
- `google.cloud.aiplatform.ui.FeaturestoreService.ListEntityTypes`
- `google.cloud.aiplatform.ui.FeaturestoreService.ListFeatures`
- `google.cloud.aiplatform.ui.FeaturestoreService.ListFeaturestores`
- `google.cloud.aiplatform.ui.FeaturestoreService.SearchFeatureOperations`
- `google.cloud.aiplatform.ui.FeaturestoreService.SearchFeatures`
- `google.cloud.aiplatform.ui.FeaturestoreService.UpdateEntityType`
- `google.cloud.aiplatform.ui.FeaturestoreService.UpdateFeature`
- `google.cloud.aiplatform.ui.FeaturestoreService.UpdateFeaturestore`
- `google.cloud.aiplatform.ui.IndexEndpointService.GetIndexEndpoint`
- `google.cloud.aiplatform.ui.IndexEndpointService.ListIndexEndpoints`
- `google.cloud.aiplatform.ui.IndexService.GetIndex`
- `google.cloud.aiplatform.ui.IndexService.ListIndexes`
- `google.cloud.aiplatform.ui.JobService.CancelBatchPredictionJob`
- `google.cloud.aiplatform.ui.JobService.CancelCustomJob`
- `google.cloud.aiplatform.ui.JobService.CancelDataLabelingJob`
- `google.cloud.aiplatform.ui.JobService.CancelHyperparameterTuningJob`
- `google.cloud.aiplatform.ui.JobService.CreateBatchPredictionJob`
- `google.cloud.aiplatform.ui.JobService.CreateCustomJob`
- `google.cloud.aiplatform.ui.JobService.CreateDataLabelingJob`
- `google.cloud.aiplatform.ui.JobService.CreateHyperparameterTuningJob`
- `google.cloud.aiplatform.ui.JobService.CreateModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.ui.JobService.CreateNasJob`
- `google.cloud.aiplatform.ui.JobService.DeleteBatchPredictionJob`
- `google.cloud.aiplatform.ui.JobService.DeleteCustomJob`
- `google.cloud.aiplatform.ui.JobService.DeleteDataLabelingJob`
- `google.cloud.aiplatform.ui.JobService.DeleteHyperparameterTuningJob`
- `google.cloud.aiplatform.ui.JobService.DeleteModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.ui.JobService.GetBatchPredictionJob`
- `google.cloud.aiplatform.ui.JobService.GetCustomJob`
- `google.cloud.aiplatform.ui.JobService.GetDataLabelingJob`
- `google.cloud.aiplatform.ui.JobService.GetHyperparameterTuningJob`
- `google.cloud.aiplatform.ui.JobService.GetModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.ui.JobService.GetNasJob`
- `google.cloud.aiplatform.ui.JobService.GetUiJob`
- `google.cloud.aiplatform.ui.JobService.ListBatchPredictionJobs`
- `google.cloud.aiplatform.ui.JobService.ListCustomJobs`
- `google.cloud.aiplatform.ui.JobService.ListDataLabelingJobs`
- `google.cloud.aiplatform.ui.JobService.ListFeedbackThreads`
- `google.cloud.aiplatform.ui.JobService.ListHyperparameterTuningJobs`
- `google.cloud.aiplatform.ui.JobService.ListNasJobs`
- `google.cloud.aiplatform.ui.JobService.ListUiJobs`
- `google.cloud.aiplatform.ui.JobService.PauseModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.ui.JobService.ResumeModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.ui.JobService.SearchModelDeploymentMonitoringStatsAnomalies`
- `google.cloud.aiplatform.ui.JobService.UpdateModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.ui.MetadataService.AddContextChildren`
- `google.cloud.aiplatform.ui.MetadataService.DeleteArtifact`
- `google.cloud.aiplatform.ui.MetadataService.DeleteContext`
- `google.cloud.aiplatform.ui.MetadataService.DeleteExecution`
- `google.cloud.aiplatform.ui.MetadataService.GetArtifact`
- `google.cloud.aiplatform.ui.MetadataService.GetContext`
- `google.cloud.aiplatform.ui.MetadataService.GetMetadataStore`
- `google.cloud.aiplatform.ui.MetadataService.ListArtifacts`
- `google.cloud.aiplatform.ui.MetadataService.ListContexts`
- `google.cloud.aiplatform.ui.MetadataService.ListExecutions`
- `google.cloud.aiplatform.ui.MetadataService.QueryArtifactLineageSubgraph`
- `google.cloud.aiplatform.ui.MetadataService.QueryExecutionInputsAndOutputs`
- `google.cloud.aiplatform.ui.MetadataService.UpdateContext`
- `google.cloud.aiplatform.ui.MigrationService.BatchMigrateResources`
- `google.cloud.aiplatform.ui.MigrationService.SearchMigratableResources`
- `google.cloud.aiplatform.ui.ModelService.DeleteModel`
- `google.cloud.aiplatform.ui.ModelService.DeleteModelVersion`
- `google.cloud.aiplatform.ui.ModelService.ExportModel`
- `google.cloud.aiplatform.ui.ModelService.GetEvaluatedDataItemView`
- `google.cloud.aiplatform.ui.ModelService.GetModel`
- `google.cloud.aiplatform.ui.ModelService.GetPredictInstanceSchema`
- `google.cloud.aiplatform.ui.ModelService.ListModelEvaluationSlices`
- `google.cloud.aiplatform.ui.ModelService.ListModelEvaluations`
- `google.cloud.aiplatform.ui.ModelService.ListModelVersions`
- `google.cloud.aiplatform.ui.ModelService.ListModels`
- `google.cloud.aiplatform.ui.ModelService.ListVersionAliases`
- `google.cloud.aiplatform.ui.ModelService.MergeVersionAliases`
- `google.cloud.aiplatform.ui.ModelService.SearchEvaluatedAnnotations`
- `google.cloud.aiplatform.ui.ModelService.UpdateModel`
- `google.cloud.aiplatform.ui.ModelService.UploadModel`
- `google.cloud.aiplatform.ui.PipelineService.CancelPipelineJob`
- `google.cloud.aiplatform.ui.PipelineService.CancelTrainingPipeline`
- `google.cloud.aiplatform.ui.PipelineService.CreatePipelineJob`
- `google.cloud.aiplatform.ui.PipelineService.CreateTrainingPipeline`
- `google.cloud.aiplatform.ui.PipelineService.DeletePipelineJob`
- `google.cloud.aiplatform.ui.PipelineService.DeleteTrainingPipeline`
- `google.cloud.aiplatform.ui.PipelineService.GetPipelineJob`
- `google.cloud.aiplatform.ui.PipelineService.GetTrainingPipeline`
- `google.cloud.aiplatform.ui.PipelineService.ListPipelineJobs`
- `google.cloud.aiplatform.ui.PipelineService.ListTrainingPipelines`
- `google.cloud.aiplatform.ui.PredictionService.Explain`
- `google.cloud.aiplatform.ui.PredictionService.Predict`
- `google.cloud.aiplatform.ui.PredictionService.RawPredict`
- `google.cloud.aiplatform.ui.SpecialistPoolService.CreateSpecialistPool`
- `google.cloud.aiplatform.ui.SpecialistPoolService.DeleteSpecialistPool`
- `google.cloud.aiplatform.ui.SpecialistPoolService.ListSpecialistPools`
- `google.cloud.aiplatform.ui.SpecialistPoolService.UpdateSpecialistPool`
- `google.cloud.aiplatform.ui.TensorboardService.CreateTensorboard`
- `google.cloud.aiplatform.ui.TensorboardService.DeleteTensorboard`
- `google.cloud.aiplatform.ui.TensorboardService.DeleteTensorboardExperiment`
- `google.cloud.aiplatform.ui.TensorboardService.GetTensorboard`
- `google.cloud.aiplatform.ui.TensorboardService.ListTensorboards`
- `google.cloud.aiplatform.ui.TensorboardService.UpdateTensorboard`
- `google.cloud.aiplatform.ui.VizierService.CompleteTrial`
- `google.cloud.aiplatform.ui.VizierService.CreateStudy`
- `google.cloud.aiplatform.ui.VizierService.DeleteStudy`
- `google.cloud.aiplatform.ui.VizierService.DeleteTrial`
- `google.cloud.aiplatform.ui.VizierService.GetStudy`
- `google.cloud.aiplatform.ui.VizierService.ListStudies`
- `google.cloud.aiplatform.ui.VizierService.ListTrials`
- `google.cloud.aiplatform.ui.VizierService.SuggestTrials`
- `google.cloud.aiplatform.v1.DatasetService.CreateDataset`
- `google.cloud.aiplatform.v1.DatasetService.DeleteDataset`
- `google.cloud.aiplatform.v1.DatasetService.ExportData`
- `google.cloud.aiplatform.v1.DatasetService.GetAnnotationSpec`
- `google.cloud.aiplatform.v1.DatasetService.GetDataset`
- `google.cloud.aiplatform.v1.DatasetService.ImportData`
- `google.cloud.aiplatform.v1.DatasetService.ListAnnotations`
- `google.cloud.aiplatform.v1.DatasetService.ListDataItems`
- `google.cloud.aiplatform.v1.DatasetService.ListDatasets`
- `google.cloud.aiplatform.v1.DatasetService.UpdateDataset`
- `google.cloud.aiplatform.v1.EndpointService.CreateEndpoint`
- `google.cloud.aiplatform.v1.EndpointService.DeleteEndpoint`
- `google.cloud.aiplatform.v1.EndpointService.DeployModel`
- `google.cloud.aiplatform.v1.EndpointService.GetEndpoint`
- `google.cloud.aiplatform.v1.EndpointService.ListEndpoints`
- `google.cloud.aiplatform.v1.EndpointService.UndeployModel`
- `google.cloud.aiplatform.v1.EndpointService.UpdateEndpoint`
- `google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.ReadFeatureValues`
- `google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.StreamingReadFeatureValues`
- `google.cloud.aiplatform.v1.FeaturestoreService.BatchCreateFeatures`
- `google.cloud.aiplatform.v1.FeaturestoreService.BatchReadFeatureValues`
- `google.cloud.aiplatform.v1.FeaturestoreService.CreateEntityType`
- `google.cloud.aiplatform.v1.FeaturestoreService.CreateFeature`
- `google.cloud.aiplatform.v1.FeaturestoreService.CreateFeaturestore`
- `google.cloud.aiplatform.v1.FeaturestoreService.DeleteEntityType`
- `google.cloud.aiplatform.v1.FeaturestoreService.DeleteFeature`
- `google.cloud.aiplatform.v1.FeaturestoreService.DeleteFeaturestore`
- `google.cloud.aiplatform.v1.FeaturestoreService.ExportFeatureValues`
- `google.cloud.aiplatform.v1.FeaturestoreService.GetFeature`
- `google.cloud.aiplatform.v1.FeaturestoreService.GetFeaturestore`
- `google.cloud.aiplatform.v1.FeaturestoreService.ImportFeatureValues`
- `google.cloud.aiplatform.v1.FeaturestoreService.ListEntityTypes`
- `google.cloud.aiplatform.v1.FeaturestoreService.ListFeatures`
- `google.cloud.aiplatform.v1.FeaturestoreService.ListFeaturestores`
- `google.cloud.aiplatform.v1.FeaturestoreService.SearchFeatures`
- `google.cloud.aiplatform.v1.FeaturestoreService.UpdateEntityType`
- `google.cloud.aiplatform.v1.FeaturestoreService.UpdateFeature`
- `google.cloud.aiplatform.v1.FeaturestoreService.UpdateFeaturestore`
- `google.cloud.aiplatform.v1.IndexEndpointService.CreateIndexEndpoint`
- `google.cloud.aiplatform.v1.IndexEndpointService.DeleteIndexEndpoint`
- `google.cloud.aiplatform.v1.IndexEndpointService.GetIndexEndpoint`
- `google.cloud.aiplatform.v1.IndexEndpointService.ListIndexEndpoints`
- `google.cloud.aiplatform.v1.IndexEndpointService.MutateDeployedIndex`
- `google.cloud.aiplatform.v1.IndexEndpointService.UndeployIndex`
- `google.cloud.aiplatform.v1.IndexService.CreateIndex`
- `google.cloud.aiplatform.v1.IndexService.GetIndex`
- `google.cloud.aiplatform.v1.IndexService.ListIndexes`
- `google.cloud.aiplatform.v1.IndexService.RemoveDatapoints`
- `google.cloud.aiplatform.v1.IndexService.UpdateIndex`
- `google.cloud.aiplatform.v1.IndexService.UpsertDatapoints`
- `google.cloud.aiplatform.v1.JobService.CancelBatchPredictionJob`
- `google.cloud.aiplatform.v1.JobService.CancelCustomJob`
- `google.cloud.aiplatform.v1.JobService.CancelDataLabelingJob`
- `google.cloud.aiplatform.v1.JobService.CancelHyperparameterTuningJob`
- `google.cloud.aiplatform.v1.JobService.CreateBatchPredictionJob`
- `google.cloud.aiplatform.v1.JobService.CreateCustomJob`
- `google.cloud.aiplatform.v1.JobService.CreateDataLabelingJob`
- `google.cloud.aiplatform.v1.JobService.CreateHyperparameterTuningJob`
- `google.cloud.aiplatform.v1.JobService.CreateModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1.JobService.CreateNasJob`
- `google.cloud.aiplatform.v1.JobService.DeleteBatchPredictionJob`
- `google.cloud.aiplatform.v1.JobService.DeleteCustomJob`
- `google.cloud.aiplatform.v1.JobService.DeleteDataLabelingJob`
- `google.cloud.aiplatform.v1.JobService.DeleteHyperparameterTuningJob`
- `google.cloud.aiplatform.v1.JobService.DeleteModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1.JobService.DeleteNasJob`
- `google.cloud.aiplatform.v1.JobService.GetBatchPredictionJob`
- `google.cloud.aiplatform.v1.JobService.GetCustomJob`
- `google.cloud.aiplatform.v1.JobService.GetHyperparameterTuningJob`
- `google.cloud.aiplatform.v1.JobService.GetModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1.JobService.GetNasJob`
- `google.cloud.aiplatform.v1.JobService.ListBatchPredictionJobs`
- `google.cloud.aiplatform.v1.JobService.ListCustomJobs`
- `google.cloud.aiplatform.v1.JobService.ListHyperparameterTuningJobs`
- `google.cloud.aiplatform.v1.JobService.ListModelDeploymentMonitoringJobs`
- `google.cloud.aiplatform.v1.JobService.ListNasJobs`
- `google.cloud.aiplatform.v1.JobService.PauseModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1.JobService.ResumeModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1.JobService.UpdateModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1.MetadataService.AddContextArtifactsAndExecutions`
- `google.cloud.aiplatform.v1.MetadataService.AddContextChildren`
- `google.cloud.aiplatform.v1.MetadataService.AddExecutionEvents`
- `google.cloud.aiplatform.v1.MetadataService.CreateArtifact`
- `google.cloud.aiplatform.v1.MetadataService.CreateContext`
- `google.cloud.aiplatform.v1.MetadataService.CreateExecution`
- `google.cloud.aiplatform.v1.MetadataService.CreateMetadataSchema`
- `google.cloud.aiplatform.v1.MetadataService.CreateMetadataStore`
- `google.cloud.aiplatform.v1.MetadataService.DeleteArtifact`
- `google.cloud.aiplatform.v1.MetadataService.DeleteContext`
- `google.cloud.aiplatform.v1.MetadataService.DeleteExecution`
- `google.cloud.aiplatform.v1.MetadataService.DeleteMetadataStore`
- `google.cloud.aiplatform.v1.MetadataService.GetArtifact`
- `google.cloud.aiplatform.v1.MetadataService.GetContext`
- `google.cloud.aiplatform.v1.MetadataService.GetExecution`
- `google.cloud.aiplatform.v1.MetadataService.GetMetadataSchema`
- `google.cloud.aiplatform.v1.MetadataService.GetMetadataStore`
- `google.cloud.aiplatform.v1.MetadataService.ListArtifacts`
- `google.cloud.aiplatform.v1.MetadataService.ListContexts`
- `google.cloud.aiplatform.v1.MetadataService.ListExecutions`
- `google.cloud.aiplatform.v1.MetadataService.ListMetadataSchemas`
- `google.cloud.aiplatform.v1.MetadataService.ListMetadataStores`
- `google.cloud.aiplatform.v1.MetadataService.PurgeArtifacts`
- `google.cloud.aiplatform.v1.MetadataService.PurgeContexts`
- `google.cloud.aiplatform.v1.MetadataService.PurgeExecutions`
- `google.cloud.aiplatform.v1.MetadataService.QueryArtifactLineageSubgraph`
- `google.cloud.aiplatform.v1.MetadataService.QueryContextLineageSubgraph`
- `google.cloud.aiplatform.v1.MetadataService.QueryExecutionInputsAndOutputs`
- `google.cloud.aiplatform.v1.MetadataService.UpdateArtifact`
- `google.cloud.aiplatform.v1.MetadataService.UpdateContext`
- `google.cloud.aiplatform.v1.MetadataService.UpdateExecution`
- `google.cloud.aiplatform.v1.MigrationService.BatchMigrateResources`
- `google.cloud.aiplatform.v1.ModelService.DeleteModel`
- `google.cloud.aiplatform.v1.ModelService.ExportModel`
- `google.cloud.aiplatform.v1.ModelService.GetModel`
- `google.cloud.aiplatform.v1.ModelService.GetModelEvaluation`
- `google.cloud.aiplatform.v1.ModelService.GetModelEvaluationSlice`
- `google.cloud.aiplatform.v1.ModelService.ImportModelEvaluation`
- `google.cloud.aiplatform.v1.ModelService.ListModelEvaluationSlices`
- `google.cloud.aiplatform.v1.ModelService.ListModelEvaluations`
- `google.cloud.aiplatform.v1.ModelService.ListModels`
- `google.cloud.aiplatform.v1.ModelService.UpdateModel`
- `google.cloud.aiplatform.v1.ModelService.UploadModel`
- `google.cloud.aiplatform.v1.PipelineService.CancelPipelineJob`
- `google.cloud.aiplatform.v1.PipelineService.CancelTrainingPipeline`
- `google.cloud.aiplatform.v1.PipelineService.CreatePipelineJob`
- `google.cloud.aiplatform.v1.PipelineService.CreateTrainingPipeline`
- `google.cloud.aiplatform.v1.PipelineService.DeletePipelineJob`
- `google.cloud.aiplatform.v1.PipelineService.DeleteTrainingPipeline`
- `google.cloud.aiplatform.v1.PipelineService.GetPipelineJob`
- `google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline`
- `google.cloud.aiplatform.v1.PipelineService.ListPipelineJobs`
- `google.cloud.aiplatform.v1.PipelineService.ListTrainingPipelines`
- `google.cloud.aiplatform.v1.PredictionService.Explain`
- `google.cloud.aiplatform.v1.PredictionService.Predict`
- `google.cloud.aiplatform.v1.PredictionService.RawPredict`
- `google.cloud.aiplatform.v1.SpecialistPoolService.CreateSpecialistPool`
- `google.cloud.aiplatform.v1.SpecialistPoolService.DeleteSpecialistPool`
- `google.cloud.aiplatform.v1.TensorboardService.BatchCreateTensorboardRuns`
- `google.cloud.aiplatform.v1.TensorboardService.BatchCreateTensorboardTimeSeries`
- `google.cloud.aiplatform.v1.TensorboardService.CreateTensorboard`
- `google.cloud.aiplatform.v1.TensorboardService.CreateTensorboardExperiment`
- `google.cloud.aiplatform.v1.TensorboardService.CreateTensorboardRun`
- `google.cloud.aiplatform.v1.TensorboardService.CreateTensorboardTimeSeries`
- `google.cloud.aiplatform.v1.TensorboardService.DeleteTensorboard`
- `google.cloud.aiplatform.v1.TensorboardService.DeleteTensorboardExperiment`
- `google.cloud.aiplatform.v1.TensorboardService.DeleteTensorboardRun`
- `google.cloud.aiplatform.v1.TensorboardService.GetTensorboard`
- `google.cloud.aiplatform.v1.TensorboardService.GetTensorboardExperiment`
- `google.cloud.aiplatform.v1.TensorboardService.GetTensorboardRun`
- `google.cloud.aiplatform.v1.TensorboardService.ListTensorboardExperiments`
- `google.cloud.aiplatform.v1.TensorboardService.ListTensorboardRuns`
- `google.cloud.aiplatform.v1.TensorboardService.ListTensorboardTimeSeries`
- `google.cloud.aiplatform.v1.TensorboardService.ListTensorboards`
- `google.cloud.aiplatform.v1.TensorboardService.ReadTensorboardBlobData`
- `google.cloud.aiplatform.v1.TensorboardService.ReadTensorboardTimeSeriesData`
- `google.cloud.aiplatform.v1.TensorboardService.WriteTensorboardExperimentData`
- `google.cloud.aiplatform.v1.TensorboardService.WriteTensorboardRunData`
- `google.cloud.aiplatform.v1.VizierService.AddTrialMeasurement`
- `google.cloud.aiplatform.v1.VizierService.CompleteTrial`
- `google.cloud.aiplatform.v1.VizierService.CreateStudy`
- `google.cloud.aiplatform.v1.VizierService.DeleteStudy`
- `google.cloud.aiplatform.v1.VizierService.DeleteTrial`
- `google.cloud.aiplatform.v1.VizierService.GetStudy`
- `google.cloud.aiplatform.v1.VizierService.GetTrial`
- `google.cloud.aiplatform.v1.VizierService.ListOptimalTrials`
- `google.cloud.aiplatform.v1.VizierService.ListStudies`
- `google.cloud.aiplatform.v1.VizierService.ListTrials`
- `google.cloud.aiplatform.v1.VizierService.SuggestTrials`
- `google.cloud.aiplatform.v1beta1.DatasetService.CreateDataset`
- `google.cloud.aiplatform.v1beta1.DatasetService.DeleteDataset`
- `google.cloud.aiplatform.v1beta1.DatasetService.ExportData`
- `google.cloud.aiplatform.v1beta1.DatasetService.GetDataset`
- `google.cloud.aiplatform.v1beta1.DatasetService.ImportData`
- `google.cloud.aiplatform.v1beta1.DatasetService.ListDataItems`
- `google.cloud.aiplatform.v1beta1.DatasetService.ListDatasets`
- `google.cloud.aiplatform.v1beta1.EdgeDeviceService.CreateEdgeDevice`
- `google.cloud.aiplatform.v1beta1.EdgeDeviceService.DeleteEdgeDevice`
- `google.cloud.aiplatform.v1beta1.EdgeDeviceService.UpdateEdgeDevice`
- `google.cloud.aiplatform.v1beta1.EndpointService.CreateEndpoint`
- `google.cloud.aiplatform.v1beta1.EndpointService.DeleteEndpoint`
- `google.cloud.aiplatform.v1beta1.EndpointService.DeployModel`
- `google.cloud.aiplatform.v1beta1.EndpointService.GetEndpoint`
- `google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints`
- `google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel`
- `google.cloud.aiplatform.v1beta1.EndpointService.UpdateEndpoint`
- `google.cloud.aiplatform.v1beta1.FeaturestoreOnlineServingService.ReadFeatureValues`
- `google.cloud.aiplatform.v1beta1.FeaturestoreOnlineServingService.StreamingReadFeatureValues`
- `google.cloud.aiplatform.v1beta1.FeaturestoreOnlineServingService.WriteFeatureValues`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.BatchCreateFeatures`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.BatchReadFeatureValues`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.CreateEntityType`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.CreateFeature`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.CreateFeaturestore`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.DeleteEntityType`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.DeleteFeature`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.DeleteFeaturestore`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.ExportFeatureValues`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.GetEntityType`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.GetFeature`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.GetFeaturestore`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.ImportFeatureValues`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.ListEntityTypes`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.ListFeatures`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.ListFeaturestores`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.SearchFeatures`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.UpdateEntityType`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.UpdateFeature`
- `google.cloud.aiplatform.v1beta1.FeaturestoreService.UpdateFeaturestore`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.CreateIndexEndpoint`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.DeleteIndexEndpoint`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.DeployIndex`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.GetIndexEndpoint`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.ListIndexEndpoints`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.MutateDeployedIndex`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.UndeployIndex`
- `google.cloud.aiplatform.v1beta1.IndexEndpointService.UpdateIndexEndpoint`
- `google.cloud.aiplatform.v1beta1.IndexService.CreateIndex`
- `google.cloud.aiplatform.v1beta1.IndexService.DeleteIndex`
- `google.cloud.aiplatform.v1beta1.IndexService.GetIndex`
- `google.cloud.aiplatform.v1beta1.IndexService.ListIndexes`
- `google.cloud.aiplatform.v1beta1.IndexService.UpdateIndex`
- `google.cloud.aiplatform.v1beta1.IndexService.UpsertDatapoints`
- `google.cloud.aiplatform.v1beta1.JobService.CancelBatchPredictionJob`
- `google.cloud.aiplatform.v1beta1.JobService.CancelCustomJob`
- `google.cloud.aiplatform.v1beta1.JobService.CancelHyperparameterTuningJob`
- `google.cloud.aiplatform.v1beta1.JobService.CreateBatchPredictionJob`
- `google.cloud.aiplatform.v1beta1.JobService.CreateCustomJob`
- `google.cloud.aiplatform.v1beta1.JobService.CreateEdgeDeploymentJob`
- `google.cloud.aiplatform.v1beta1.JobService.CreateHyperparameterTuningJob`
- `google.cloud.aiplatform.v1beta1.JobService.CreateModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1beta1.JobService.DeleteCustomJob`
- `google.cloud.aiplatform.v1beta1.JobService.DeleteEdgeDeploymentJob`
- `google.cloud.aiplatform.v1beta1.JobService.DeleteHyperparameterTuningJob`
- `google.cloud.aiplatform.v1beta1.JobService.DeleteModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1beta1.JobService.GetBatchPredictionJob`
- `google.cloud.aiplatform.v1beta1.JobService.GetCustomJob`
- `google.cloud.aiplatform.v1beta1.JobService.GetHyperparameterTuningJob`
- `google.cloud.aiplatform.v1beta1.JobService.GetModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1beta1.JobService.ListBatchPredictionJobs`
- `google.cloud.aiplatform.v1beta1.JobService.ListCustomJobs`
- `google.cloud.aiplatform.v1beta1.JobService.ListModelDeploymentMonitoringJobs`
- `google.cloud.aiplatform.v1beta1.JobService.PauseModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1beta1.JobService.ResumeModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1beta1.JobService.SearchModelDeploymentMonitoringStatsAnomalies`
- `google.cloud.aiplatform.v1beta1.JobService.UpdateModelDeploymentMonitoringJob`
- `google.cloud.aiplatform.v1beta1.MetadataService.AddContextArtifactsAndExecutions`
- `google.cloud.aiplatform.v1beta1.MetadataService.AddContextChildren`
- `google.cloud.aiplatform.v1beta1.MetadataService.AddExecutionEvents`
- `google.cloud.aiplatform.v1beta1.MetadataService.CreateArtifact`
- `google.cloud.aiplatform.v1beta1.MetadataService.CreateContext`
- `google.cloud.aiplatform.v1beta1.MetadataService.CreateExecution`
- `google.cloud.aiplatform.v1beta1.MetadataService.CreateMetadataSchema`
- `google.cloud.aiplatform.v1beta1.MetadataService.CreateMetadataStore`
- `google.cloud.aiplatform.v1beta1.MetadataService.DeleteArtifact`
- `google.cloud.aiplatform.v1beta1.MetadataService.DeleteContext`
- `google.cloud.aiplatform.v1beta1.MetadataService.DeleteExecution`
- `google.cloud.aiplatform.v1beta1.MetadataService.DeleteMetadataStore`
- `google.cloud.aiplatform.v1beta1.MetadataService.GetArtifact`
- `google.cloud.aiplatform.v1beta1.MetadataService.GetContext`
- `google.cloud.aiplatform.v1beta1.MetadataService.GetExecution`
- `google.cloud.aiplatform.v1beta1.MetadataService.GetMetadataSchema`
- `google.cloud.aiplatform.v1beta1.MetadataService.GetMetadataStore`
- `google.cloud.aiplatform.v1beta1.MetadataService.ListArtifacts`
- `google.cloud.aiplatform.v1beta1.MetadataService.ListContexts`
- `google.cloud.aiplatform.v1beta1.MetadataService.ListExecutions`
- `google.cloud.aiplatform.v1beta1.MetadataService.ListMetadataSchemas`
- `google.cloud.aiplatform.v1beta1.MetadataService.ListMetadataStores`
- `google.cloud.aiplatform.v1beta1.MetadataService.PurgeArtifacts`
- `google.cloud.aiplatform.v1beta1.MetadataService.PurgeContexts`
- `google.cloud.aiplatform.v1beta1.MetadataService.PurgeExecutions`
- `google.cloud.aiplatform.v1beta1.MetadataService.QueryArtifactLineageSubgraph`
- `google.cloud.aiplatform.v1beta1.MetadataService.QueryContextLineageSubgraph`
- `google.cloud.aiplatform.v1beta1.MetadataService.QueryExecutionInputsAndOutputs`
- `google.cloud.aiplatform.v1beta1.MetadataService.UpdateArtifact`
- `google.cloud.aiplatform.v1beta1.MetadataService.UpdateContext`
- `google.cloud.aiplatform.v1beta1.MetadataService.UpdateExecution`
- `google.cloud.aiplatform.v1beta1.ModelService.DeleteModel`
- `google.cloud.aiplatform.v1beta1.ModelService.ExportModel`
- `google.cloud.aiplatform.v1beta1.ModelService.GetModel`
- `google.cloud.aiplatform.v1beta1.ModelService.GetModelEvaluation`
- `google.cloud.aiplatform.v1beta1.ModelService.ListModelEvaluations`
- `google.cloud.aiplatform.v1beta1.ModelService.ListModels`
- `google.cloud.aiplatform.v1beta1.ModelService.UploadModel`
- `google.cloud.aiplatform.v1beta1.PipelineService.CancelPipelineJob`
- `google.cloud.aiplatform.v1beta1.PipelineService.CancelTrainingPipeline`
- `google.cloud.aiplatform.v1beta1.PipelineService.CreatePipelineJob`
- `google.cloud.aiplatform.v1beta1.PipelineService.CreateTrainingPipeline`
- `google.cloud.aiplatform.v1beta1.PipelineService.DeletePipelineJob`
- `google.cloud.aiplatform.v1beta1.PipelineService.DeleteTrainingPipeline`
- `google.cloud.aiplatform.v1beta1.PipelineService.GetPipelineJob`
- `google.cloud.aiplatform.v1beta1.PipelineService.GetTrainingPipeline`
- `google.cloud.aiplatform.v1beta1.PipelineService.ListPipelineJobs`
- `google.cloud.aiplatform.v1beta1.PipelineService.ListTrainingPipelines`
- `google.cloud.aiplatform.v1beta1.PredictionService.Explain`
- `google.cloud.aiplatform.v1beta1.PredictionService.Predict`
- `google.cloud.aiplatform.v1beta1.TensorboardService.BatchCreateTensorboardRuns`
- `google.cloud.aiplatform.v1beta1.TensorboardService.BatchCreateTensorboardTimeSeries`
- `google.cloud.aiplatform.v1beta1.TensorboardService.CreateTensorboard`
- `google.cloud.aiplatform.v1beta1.TensorboardService.CreateTensorboardExperiment`
- `google.cloud.aiplatform.v1beta1.TensorboardService.CreateTensorboardRun`
- `google.cloud.aiplatform.v1beta1.TensorboardService.CreateTensorboardTimeSeries`
- `google.cloud.aiplatform.v1beta1.TensorboardService.DeleteTensorboard`
- `google.cloud.aiplatform.v1beta1.TensorboardService.DeleteTensorboardRun`
- `google.cloud.aiplatform.v1beta1.TensorboardService.GetTensorboard`
- `google.cloud.aiplatform.v1beta1.TensorboardService.ListTensorboards`
- `google.cloud.aiplatform.v1beta1.TensorboardService.ReadTensorboardBlobData`
- `google.cloud.aiplatform.v1beta1.TensorboardService.ReadTensorboardTimeSeriesData`
- `google.cloud.aiplatform.v1beta1.TensorboardService.WriteTensorboardExperimentData`
- `google.cloud.aiplatform.v1beta1.TensorboardService.WriteTensorboardRunData`
- `google.cloud.aiplatform.v1beta1.VizierService.AddTrialMeasurement`
- `google.cloud.aiplatform.v1beta1.VizierService.CompleteTrial`
- `google.cloud.aiplatform.v1beta1.VizierService.CreateStudy`
- `google.cloud.aiplatform.v1beta1.VizierService.DeleteStudy`
- `google.cloud.aiplatform.v1beta1.VizierService.GetTrial`
- `google.cloud.aiplatform.v1beta1.VizierService.ListOptimalTrials`
- `google.cloud.aiplatform.v1beta1.VizierService.SuggestTrials`

### Apigee

#### `serviceName`

- `apigee.googleapis.com`

#### `methodName`

- `google.cloud.apigee.v1.AnalyticsCustomReport.CreateCustomReport`
- `google.cloud.apigee.v1.AnalyticsCustomReport.DeleteCustomReport`
- `google.cloud.apigee.v1.AnalyticsCustomReport.GetCustomReport`
- `google.cloud.apigee.v1.AnalyticsCustomReport.ListCustomReports`
- `google.cloud.apigee.v1.AnalyticsCustomReport.UpdateCustomReport`
- `google.cloud.apigee.v1.AnalyticsDatastore.CreateDatastore`
- `google.cloud.apigee.v1.AnalyticsDatastore.DeleteDatastore`
- `google.cloud.apigee.v1.AnalyticsDatastore.ListDatastores`
- `google.cloud.apigee.v1.AnalyticsDatastore.TestDatastore`
- `google.cloud.apigee.v1.AnalyticsDatastore.UpdateDatastore`
- `google.cloud.apigee.v1.AnalyticsInteractiveQuery.GetHostStats`
- `google.cloud.apigee.v1.AnalyticsInteractiveQuery.GetOptimizedHostStats`
- `google.cloud.apigee.v1.AnalyticsInteractiveQuery.GetOptimizedStats`
- `google.cloud.apigee.v1.AnalyticsInteractiveQuery.GetStats`
- `google.cloud.apigee.v1.AnalyticsSchema.GetSchema`
- `google.cloud.apigee.v1.ApiCategories.CreateApiCategory`
- `google.cloud.apigee.v1.ApiCategories.DeleteApiCategory`
- `google.cloud.apigee.v1.ApiCategories.ListApiCategories`
- `google.cloud.apigee.v1.ApiCategories.UpdateApiCategory`
- `google.cloud.apigee.v1.ApiDocs.CreateApiDoc`
- `google.cloud.apigee.v1.ApiDocs.DeleteApiDoc`
- `google.cloud.apigee.v1.ApiDocs.DeleteSnapshot`
- `google.cloud.apigee.v1.ApiDocs.GetApiDoc`
- `google.cloud.apigee.v1.ApiDocs.ListApiDocs`
- `google.cloud.apigee.v1.ApiDocs.ListPublishableProducts`
- `google.cloud.apigee.v1.ApiDocs.PostSnapshot`
- `google.cloud.apigee.v1.ApiDocs.TagApiDocs`
- `google.cloud.apigee.v1.ApiDocs.TakeSnapshot`
- `google.cloud.apigee.v1.ApiDocs.UpdateApiDoc`
- `google.cloud.apigee.v1.ApiProducts.CreateApiProduct`
- `google.cloud.apigee.v1.ApiProducts.DeleteApiProduct`
- `google.cloud.apigee.v1.ApiProducts.DeleteApiProductAttribute`
- `google.cloud.apigee.v1.ApiProducts.GetApiProduct`
- `google.cloud.apigee.v1.ApiProducts.ListApiProductAttributes`
- `google.cloud.apigee.v1.ApiProducts.ListApiProducts`
- `google.cloud.apigee.v1.ApiProducts.UpdateApiProduct`
- `google.cloud.apigee.v1.ApiProducts.UpdateApiProductAttribute`
- `google.cloud.apigee.v1.ApiProducts.UpdateApiProductAttributes`
- `google.cloud.apigee.v1.ApiProxyService.CreateApiProxyRevision`
- `google.cloud.apigee.v1.ApiProxyService.DeleteApiProxy`
- `google.cloud.apigee.v1.ApiProxyService.DeleteApiProxyRevision`
- `google.cloud.apigee.v1.ApiProxyService.GetApiProxy`
- `google.cloud.apigee.v1.ApiProxyService.GetApiProxyRevision`
- `google.cloud.apigee.v1.ApiProxyService.ListApiProxies`
- `google.cloud.apigee.v1.ApiProxyService.ListApiProxyRevisions`
- `google.cloud.apigee.v1.ApiProxyService.UpdateApiProxyRevision`
- `google.cloud.apigee.v1.Apps.GetApp`
- `google.cloud.apigee.v1.Apps.ListApps`
- `google.cloud.apigee.v1.ArchiveDeploymentService.CreateArchiveDeployment`
- `google.cloud.apigee.v1.ArchiveDeploymentService.DeleteArchiveDeployment`
- `google.cloud.apigee.v1.ArchiveDeploymentService.GenerateDownloadUrl`
- `google.cloud.apigee.v1.ArchiveDeploymentService.GenerateUploadUrl`
- `google.cloud.apigee.v1.ArchiveDeploymentService.GetArchiveDeployment`
- `google.cloud.apigee.v1.ArchiveDeploymentService.ListArchiveDeployments`
- `google.cloud.apigee.v1.ArchiveDeploymentService.UpdateArchiveDeployment`
- `google.cloud.apigee.v1.AsyncQueryService.CreateAsyncQuery`
- `google.cloud.apigee.v1.AsyncQueryService.CreateHostAsyncQuery`
- `google.cloud.apigee.v1.AsyncQueryService.GetAsyncQuery`
- `google.cloud.apigee.v1.AsyncQueryService.GetAsyncQueryResult`
- `google.cloud.apigee.v1.AsyncQueryService.GetAsyncQueryResultView`
- `google.cloud.apigee.v1.AsyncQueryService.ListAsyncQueries`
- `google.cloud.apigee.v1.CacheService.DeleteCache`
- `google.cloud.apigee.v1.CacheService.ListCaches`
- `google.cloud.apigee.v1.CollectionService.GetDataLocation`
- `google.cloud.apigee.v1.Consumer.CreateConsumerAudience`
- `google.cloud.apigee.v1.Consumer.CreateConsumerAudienceMemberships`
- `google.cloud.apigee.v1.Consumer.CreateResource`
- `google.cloud.apigee.v1.Consumer.DeleteConsumerAudience`
- `google.cloud.apigee.v1.Consumer.DeleteConsumerUser`
- `google.cloud.apigee.v1.Consumer.DeleteResource`
- `google.cloud.apigee.v1.Consumer.GetConsumerAudience`
- `google.cloud.apigee.v1.Consumer.GetConsumerTeam`
- `google.cloud.apigee.v1.Consumer.GetConsumerUser`
- `google.cloud.apigee.v1.Consumer.ListConsumerAudiences`
- `google.cloud.apigee.v1.Consumer.ListConsumerTeams`
- `google.cloud.apigee.v1.Consumer.ListConsumerUsers`
- `google.cloud.apigee.v1.Consumer.UpdateConsumerAudience`
- `google.cloud.apigee.v1.Consumer.UpdateConsumerUser`
- `google.cloud.apigee.v1.Customcss.GetCustomCss`
- `google.cloud.apigee.v1.Customcss.GetEditorSchema`
- `google.cloud.apigee.v1.Customcss.PublishCustomCss`
- `google.cloud.apigee.v1.Customcss.UpdateCustomCss`
- `google.cloud.apigee.v1.DataCollectorService.CreateDataCollector`
- `google.cloud.apigee.v1.DataCollectorService.DeleteDataCollector`
- `google.cloud.apigee.v1.DataCollectorService.GetDataCollector`
- `google.cloud.apigee.v1.DataCollectorService.ListDataCollectors`
- `google.cloud.apigee.v1.DataCollectorService.UpdateDataCollector`
- `google.cloud.apigee.v1.DataExport.CreateExport`
- `google.cloud.apigee.v1.DataExport.GetExport`
- `google.cloud.apigee.v1.DataMaskService.GetEnvironmentDebugMask`
- `google.cloud.apigee.v1.DataMaskService.UpdateEnvironmentDebugMask`
- `google.cloud.apigee.v1.DebugSessionService.CreateDebugSession`
- `google.cloud.apigee.v1.DebugSessionService.DeleteDebugSessionData`
- `google.cloud.apigee.v1.DebugSessionService.GetDebugSession`
- `google.cloud.apigee.v1.DebugSessionService.GetDebugSessionTransaction`
- `google.cloud.apigee.v1.DebugSessionService.ListDebugSessionTransactions`
- `google.cloud.apigee.v1.DebugSessionService.ListDebugSessions`
- `google.cloud.apigee.v1.DeploymentService.AttachSharedFlowToFlowHook`
- `google.cloud.apigee.v1.DeploymentService.DeployApiProxy`
- `google.cloud.apigee.v1.DeploymentService.DeploySharedFlow`
- `google.cloud.apigee.v1.DeploymentService.DetachSharedFlowFromFlowHook`
- `google.cloud.apigee.v1.DeploymentService.GenerateDeployChangeReport`
- `google.cloud.apigee.v1.DeploymentService.GenerateUndeployChangeReport`
- `google.cloud.apigee.v1.DeploymentService.GetApiDeployment`
- `google.cloud.apigee.v1.DeploymentService.GetFlowHook`
- `google.cloud.apigee.v1.DeploymentService.GetSharedFlowDeployment`
- `google.cloud.apigee.v1.DeploymentService.ListApiDeployments`
- `google.cloud.apigee.v1.DeploymentService.ListApiDeploymentsInEnvironment`
- `google.cloud.apigee.v1.DeploymentService.ListApiRevisionDeployments`
- `google.cloud.apigee.v1.DeploymentService.ListEnvironmentDeployments`
- `google.cloud.apigee.v1.DeploymentService.ListFlowHooks`
- `google.cloud.apigee.v1.DeploymentService.ListOrganizationDeployments`
- `google.cloud.apigee.v1.DeploymentService.ListSharedFlowDeployments`
- `google.cloud.apigee.v1.DeploymentService.ListSharedFlowDeploymentsInEnvironment`
- `google.cloud.apigee.v1.DeploymentService.ListSharedFlowRevisionDeployments`
- `google.cloud.apigee.v1.DeploymentService.UndeployApiProxy`
- `google.cloud.apigee.v1.DeploymentService.UndeploySharedFlow`
- `google.cloud.apigee.v1.DeveloperAppKeys.CreateDeveloperAppKey`
- `google.cloud.apigee.v1.DeveloperAppKeys.DeleteApiProduct`
- `google.cloud.apigee.v1.DeveloperAppKeys.DeleteDeveloperAppKey`
- `google.cloud.apigee.v1.DeveloperAppKeys.GetDeveloperAppKey`
- `google.cloud.apigee.v1.DeveloperAppKeys.ReplaceDeveloperAppKey`
- `google.cloud.apigee.v1.DeveloperAppKeys.UpdateDeveloperAppKey`
- `google.cloud.apigee.v1.DeveloperAppKeys.UpdateDeveloperAppKeyApiProduct`
- `google.cloud.apigee.v1.DeveloperApps.CreateDeveloperApp`
- `google.cloud.apigee.v1.DeveloperApps.DeleteDeveloperApp`
- `google.cloud.apigee.v1.DeveloperApps.DeleteDeveloperAppAttribute`
- `google.cloud.apigee.v1.DeveloperApps.GenerateKeyPairOrUpdateDeveloperAppStatus`
- `google.cloud.apigee.v1.DeveloperApps.GetDeveloperApp`
- `google.cloud.apigee.v1.DeveloperApps.ListDeveloperAppAttributes`
- `google.cloud.apigee.v1.DeveloperApps.ListDeveloperApps`
- `google.cloud.apigee.v1.DeveloperApps.UpdateDeveloperApp`
- `google.cloud.apigee.v1.DeveloperApps.UpdateDeveloperAppAttribute`
- `google.cloud.apigee.v1.DeveloperApps.UpdateDeveloperAppAttributes`
- `google.cloud.apigee.v1.DeveloperSubscriptions.CreateDeveloperSubscription`
- `google.cloud.apigee.v1.DeveloperSubscriptions.ExpireDeveloperSubscription`
- `google.cloud.apigee.v1.DeveloperSubscriptions.ListDeveloperSubscriptions`
- `google.cloud.apigee.v1.Developers.CreateDeveloper`
- `google.cloud.apigee.v1.Developers.CreditDeveloperBalance`
- `google.cloud.apigee.v1.Developers.DeleteDeveloper`
- `google.cloud.apigee.v1.Developers.DeleteDeveloperAttribute`
- `google.cloud.apigee.v1.Developers.GetDeveloper`
- `google.cloud.apigee.v1.Developers.GetDeveloperBalance`
- `google.cloud.apigee.v1.Developers.GetDeveloperMonetizationConfig`
- `google.cloud.apigee.v1.Developers.ListDevelopers`
- `google.cloud.apigee.v1.Developers.SetDeveloperStatus`
- `google.cloud.apigee.v1.Developers.UpdateDeveloper`
- `google.cloud.apigee.v1.Developers.UpdateDeveloperAttribute`
- `google.cloud.apigee.v1.Developers.UpdateDeveloperAttributes`
- `google.cloud.apigee.v1.Developers.UpdateDeveloperMonetizationConfig`
- `google.cloud.apigee.v1.EndpointAttachmentService.GetEndpointAttachment`
- `google.cloud.apigee.v1.EnvironmentGroupAttachmentService.CreateEnvironmentGroupAttachment`
- `google.cloud.apigee.v1.EnvironmentGroupAttachmentService.DeleteEnvironmentGroupAttachment`
- `google.cloud.apigee.v1.EnvironmentGroupAttachmentService.GetEnvironmentGroupAttachment`
- `google.cloud.apigee.v1.EnvironmentGroupAttachmentService.ListEnvironmentGroupAttachments`
- `google.cloud.apigee.v1.EnvironmentGroupService.CreateEnvironmentGroup`
- `google.cloud.apigee.v1.EnvironmentGroupService.DeleteEnvironmentGroup`
- `google.cloud.apigee.v1.EnvironmentGroupService.GetEnvironmentGroup`
- `google.cloud.apigee.v1.EnvironmentGroupService.ListEnvironmentGroups`
- `google.cloud.apigee.v1.EnvironmentGroupService.UpdateEnvironmentGroup`
- `google.cloud.apigee.v1.EnvironmentService.CreateEnvironment`
- `google.cloud.apigee.v1.EnvironmentService.DeleteEnvironment`
- `google.cloud.apigee.v1.EnvironmentService.GetDeployedConfig`
- `google.cloud.apigee.v1.EnvironmentService.GetEnvironment`
- `google.cloud.apigee.v1.EnvironmentService.GetIamPolicy`
- `google.cloud.apigee.v1.EnvironmentService.ListEnvironments`
- `google.cloud.apigee.v1.EnvironmentService.ModifyEnvironment`
- `google.cloud.apigee.v1.EnvironmentService.SetIamPolicy`
- `google.cloud.apigee.v1.EnvironmentService.Subscribe`
- `google.cloud.apigee.v1.EnvironmentService.Unsubscribe`
- `google.cloud.apigee.v1.EnvironmentService.UpdateEnvironment`
- `google.cloud.apigee.v1.InstanceAttachmentService.CreateInstanceAttachment`
- `google.cloud.apigee.v1.InstanceAttachmentService.DeleteInstanceAttachment`
- `google.cloud.apigee.v1.InstanceAttachmentService.GetInstanceAttachment`
- `google.cloud.apigee.v1.InstanceAttachmentService.ListInstanceAttachments`
- `google.cloud.apigee.v1.InstanceService.CreateInstance`
- `google.cloud.apigee.v1.InstanceService.CreateInstanceAndAttachments`
- `google.cloud.apigee.v1.InstanceService.DeleteInstance`
- `google.cloud.apigee.v1.InstanceService.GetInstance`
- `google.cloud.apigee.v1.InstanceService.ListInstances`
- `google.cloud.apigee.v1.InstanceService.UpdateInstance`
- `google.cloud.apigee.v1.InstanceService.UpdateInstanceAndAttachments`
- `google.cloud.apigee.v1.KeyValueMapService.CreateApiProxyKeyValueMap`
- `google.cloud.apigee.v1.KeyValueMapService.CreateEnvironmentKeyValueMap`
- `google.cloud.apigee.v1.KeyValueMapService.CreateOrganizationKeyValueMap`
- `google.cloud.apigee.v1.KeyValueMapService.DeleteApiProxyKeyValueMap`
- `google.cloud.apigee.v1.KeyValueMapService.DeleteEnvironmentKeyValueMap`
- `google.cloud.apigee.v1.KeyValueMapService.DeleteOrganizationKeyValueMap`
- `google.cloud.apigee.v1.KeyValueMapService.ListApiProxyKeyValueMaps`
- `google.cloud.apigee.v1.KeyValueMapService.ListEnvironmentKeyValueMaps`
- `google.cloud.apigee.v1.KeyValueMapService.ListOrganizationKeyValueMaps`
- `google.cloud.apigee.v1.KeystoreService.CreateAlias`
- `google.cloud.apigee.v1.KeystoreService.CreateKeystore`
- `google.cloud.apigee.v1.KeystoreService.DeleteAlias`
- `google.cloud.apigee.v1.KeystoreService.DeleteKeystore`
- `google.cloud.apigee.v1.KeystoreService.GenerateCsr`
- `google.cloud.apigee.v1.KeystoreService.GetAlias`
- `google.cloud.apigee.v1.KeystoreService.GetCertificateFromAlias`
- `google.cloud.apigee.v1.KeystoreService.GetKeystore`
- `google.cloud.apigee.v1.KeystoreService.ListAliases`
- `google.cloud.apigee.v1.KeystoreService.ListKeystores`
- `google.cloud.apigee.v1.KeystoreService.UpdateAlias`
- `google.cloud.apigee.v1.MenuItems.CreateMenuItem`
- `google.cloud.apigee.v1.MenuItems.DeleteMenuItem`
- `google.cloud.apigee.v1.MenuItems.ListMenuItems`
- `google.cloud.apigee.v1.MenuItems.PublishMenuItem`
- `google.cloud.apigee.v1.MenuItems.ToggleNested`
- `google.cloud.apigee.v1.MenuItems.UpdateMenuItem`
- `google.cloud.apigee.v1.MenuItems.UpdatePriorities`
- `google.cloud.apigee.v1.MenuTypes.CreateMenuType`
- `google.cloud.apigee.v1.MenuTypes.DeleteMenuType`
- `google.cloud.apigee.v1.MenuTypes.ListMenuTypes`
- `google.cloud.apigee.v1.MenuTypes.ListMenuTypesByPage`
- `google.cloud.apigee.v1.MigrationService.MigrateConfigData`
- `google.cloud.apigee.v1.MigrationService.MigrateInfrastructure`
- `google.cloud.apigee.v1.MigrationService.SwitchTraffic`
- `google.cloud.apigee.v1.NatAddressService.ActivateNatAddress`
- `google.cloud.apigee.v1.NatAddressService.CreateNatAddress`
- `google.cloud.apigee.v1.NatAddressService.DeleteNatAddress`
- `google.cloud.apigee.v1.NatAddressService.GetNatAddress`
- `google.cloud.apigee.v1.NatAddressService.ListNatAddresses`
- `google.cloud.apigee.v1.OrganizationService.CreateOrganization`
- `google.cloud.apigee.v1.OrganizationService.DeleteOrganization`
- `google.cloud.apigee.v1.OrganizationService.GetOrganization`
- `google.cloud.apigee.v1.OrganizationService.GetSyncAuthorization`
- `google.cloud.apigee.v1.OrganizationService.SetAddons`
- `google.cloud.apigee.v1.OrganizationService.SetSyncAuthorization`
- `google.cloud.apigee.v1.OrganizationService.UpdateOrganization`
- `google.cloud.apigee.v1.Pages.CreatePage`
- `google.cloud.apigee.v1.Pages.DeletePage`
- `google.cloud.apigee.v1.Pages.GetPage`
- `google.cloud.apigee.v1.Pages.ListPages`
- `google.cloud.apigee.v1.Pages.PublishPage`
- `google.cloud.apigee.v1.Pages.SetPageContent`
- `google.cloud.apigee.v1.Pages.UnpublishPage`
- `google.cloud.apigee.v1.Pages.UpdatePage`
- `google.cloud.apigee.v1.ProjectService.GetEntitlement`
- `google.cloud.apigee.v1.ProjectService.GetProjectOrganization`
- `google.cloud.apigee.v1.ProjectService.GetSetupContext`
- `google.cloud.apigee.v1.ProjectService.ProvisionOrganization`
- `google.cloud.apigee.v1.ProjectService.UpdateSetupContext`
- `google.cloud.apigee.v1.ProjectService.ValidateSetupConfig`
- `google.cloud.apigee.v1.RatePlans.CreateRatePlan`
- `google.cloud.apigee.v1.RatePlans.DeleteRatePlan`
- `google.cloud.apigee.v1.RatePlans.GetRatePlan`
- `google.cloud.apigee.v1.RatePlans.ListRatePlans`
- `google.cloud.apigee.v1.RatePlans.UpdateRatePlan`
- `google.cloud.apigee.v1.ReferenceService.CreateReference`
- `google.cloud.apigee.v1.ReferenceService.DeleteReference`
- `google.cloud.apigee.v1.ReferenceService.GetReference`
- `google.cloud.apigee.v1.ReferenceService.ListReferences`
- `google.cloud.apigee.v1.ReferenceService.UpdateReference`
- `google.cloud.apigee.v1.ResourceEntitlements.GetDefaultResourceEntitlements`
- `google.cloud.apigee.v1.ResourceEntitlements.GetResourceEntitlement`
- `google.cloud.apigee.v1.ResourceEntitlements.UpdateDefaultResourceEntitlement`
- `google.cloud.apigee.v1.ResourceEntitlements.UpdateResourceEntitlement`
- `google.cloud.apigee.v1.ResourceFileService.CreateEnvironmentResource`
- `google.cloud.apigee.v1.ResourceFileService.DeleteEnvironmentResource`
- `google.cloud.apigee.v1.ResourceFileService.GetEnvironmentResource`
- `google.cloud.apigee.v1.ResourceFileService.ListEnvironmentResources`
- `google.cloud.apigee.v1.ResourceFileService.UpdateEnvironmentResource`
- `google.cloud.apigee.v1.Resources.QueryApiDocs`
- `google.cloud.apigee.v1.Resources.QueryPages`
- `google.cloud.apigee.v1.RuntimeService.CreateCanaryEvaluation`
- `google.cloud.apigee.v1.RuntimeService.GetDeployedIngressConfig`
- `google.cloud.apigee.v1.RuntimeService.GetRuntimeConfig`
- `google.cloud.apigee.v1.RuntimeService.ReportInstanceStatus`
- `google.cloud.apigee.v1.SecurityReportService.CreateSecurityReport`
- `google.cloud.apigee.v1.SecurityReportService.ListSecurityReports`
- `google.cloud.apigee.v1.SenseProfileService.CreateSenseProfileEnvironmentAssociation`
- `google.cloud.apigee.v1.SenseProfileService.DeleteSenseProfileEnvironmentAssociation`
- `google.cloud.apigee.v1.SharedFlowService.CreateSharedFlowRevision`
- `google.cloud.apigee.v1.SharedFlowService.DeleteSharedFlow`
- `google.cloud.apigee.v1.SharedFlowService.DeleteSharedFlowRevision`
- `google.cloud.apigee.v1.SharedFlowService.GetSharedFlow`
- `google.cloud.apigee.v1.SharedFlowService.GetSharedFlowRevision`
- `google.cloud.apigee.v1.SharedFlowService.ListSharedFlowRevisions`
- `google.cloud.apigee.v1.SharedFlowService.ListSharedFlows`
- `google.cloud.apigee.v1.SharedFlowService.UpdateSharedFlowRevision`
- `google.cloud.apigee.v1.SiteDomain.DisableCustomDomain`
- `google.cloud.apigee.v1.SiteDomain.EnableCustomDomain`
- `google.cloud.apigee.v1.SiteDomain.GetCustomDomainConfig`
- `google.cloud.apigee.v1.SiteEmail.GetEmailTemplate`
- `google.cloud.apigee.v1.SiteEmail.UpdateEmailTemplate`
- `google.cloud.apigee.v1.SiteFile.DeleteFile`
- `google.cloud.apigee.v1.SiteFile.ListFiles`
- `google.cloud.apigee.v1.SiteFile.UploadFile`
- `google.cloud.apigee.v1.SiteOperation.GetDefaultAnonAllowed`
- `google.cloud.apigee.v1.SiteOperation.GetDraftToken`
- `google.cloud.apigee.v1.SiteOperation.GetOrgType`
- `google.cloud.apigee.v1.SiteOperation.RegenerateSecretKey`
- `google.cloud.apigee.v1.SiteOperation.ResetSmtp`
- `google.cloud.apigee.v1.SiteOperation.SendTestEmail`
- `google.cloud.apigee.v1.SiteOperation.SetApprovedEmails`
- `google.cloud.apigee.v1.SiteOperation.SetDefaultAnonAllowed`
- `google.cloud.apigee.v1.SiteOperation.TrashSite`
- `google.cloud.apigee.v1.SiteOperation.UpdateAnalyticsScript`
- `google.cloud.apigee.v1.SiteOperation.VerifyDraftToken`
- `google.cloud.apigee.v1.Sites.CheckDnsCname`
- `google.cloud.apigee.v1.Sites.CreateSite`
- `google.cloud.apigee.v1.Sites.GetAllInOrgOrSingleWithDomain`
- `google.cloud.apigee.v1.Sites.GetSite`
- `google.cloud.apigee.v1.Sites.GetSmtp`
- `google.cloud.apigee.v1.Sites.UpdateSite`
- `google.cloud.apigee.v1.Sites.UpdateSmtp`
- `google.cloud.apigee.v1.System.GetAnnouncement`
- `google.cloud.apigee.v1.System.GetConfig`
- `google.cloud.apigee.v1.System.GetSystemState`
- `google.cloud.apigee.v1.TargetServerService.CreateTargetServer`
- `google.cloud.apigee.v1.TargetServerService.DeleteTargetServer`
- `google.cloud.apigee.v1.TargetServerService.GetTargetServer`
- `google.cloud.apigee.v1.TargetServerService.ListTargetServers`
- `google.cloud.apigee.v1.TargetServerService.UpdateTargetServer`
- `google.cloud.apigee.v1.TraceConfigOverrideService.CreateTraceConfigOverride`
- `google.cloud.apigee.v1.TraceConfigOverrideService.DeleteTraceConfigOverride`
- `google.cloud.apigee.v1.TraceConfigOverrideService.GetTraceConfigOverride`
- `google.cloud.apigee.v1.TraceConfigOverrideService.ListTraceConfigOverrides`
- `google.cloud.apigee.v1.TraceConfigOverrideService.UpdateTraceConfigOverride`
- `google.cloud.apigee.v1.TraceConfigService.GetTraceConfig`
- `google.cloud.apigee.v1.TraceConfigService.UpdateTraceConfig`
- `google.cloud.apigee.v1.Zones.CreateIdentityProvider`
- `google.cloud.apigee.v1.Zones.EnableZoneAudience`
- `google.cloud.apigee.v1.Zones.GetAudiencesEnabled`
- `google.cloud.apigee.v1.Zones.GetZone`
- `google.cloud.apigee.v1.Zones.ListIdentityProviders`
- `google.cloud.apigee.v1.Zones.SendTestEmail`
- `google.cloud.apigee.v1.Zones.UpdateIdentityProvider`
- `google.cloud.apigee.v1.Zones.UpdateIdentityProviderCertificate`
- `google.cloud.apigee.v1.Zones.UpdateIdentityProviderConfig`
- `google.cloud.apigee.v1.Zones.UpdateZone`
- `google.cloud.apigee.v1.Zones.VerifyCertificate`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Apigee Connect

#### `serviceName`

- `apigeeconnect.googleapis.com`

#### `methodName`

- `google.cloud.apigeeconnect.v1.ConnectionService.ListConnections`
- `google.cloud.apigeeconnect.v1.Tether.Egress`

### API Keys

#### `serviceName`

- `apikeys.googleapis.com`

#### `methodName`

- `google.api.apikeys.v1.ApiKeys.CreateApiKey`
- `google.api.apikeys.v1.ApiKeys.DeleteApiKey`
- `google.api.apikeys.v1.ApiKeys.DeleteApiKeys`
- `google.api.apikeys.v1.ApiKeys.PatchApiKey`
- `google.api.apikeys.v1.ApiKeys.RegenerateApiKey`
- `google.api.apikeys.v1.ApiKeys.RevertApiKey`
- `google.api.apikeys.v2.ApiKeys.CloneKey`
- `google.api.apikeys.v2.ApiKeys.CreateKey`
- `google.api.apikeys.v2.ApiKeys.DeleteKey`
- `google.api.apikeys.v2.ApiKeys.GetKeyString`
- `google.api.apikeys.v2.ApiKeys.UndeleteKey`
- `google.api.apikeys.v2.ApiKeys.UpdateKey`
- `google.longrunning.Operations.GetOperation`

### App Engine

#### `serviceName`

- `appengine.googleapis.com`

#### `methodName`

- `apphosting.admin.ApphostingPrivateAdmin.UpdateVersion`
- `apphosting.admin.DatastoreWriteController.SetDatastoreWritePermission`
- `apphosting.admin.proto.E2ETestService.SetServingStatus`
- `apphosting.admin.proto.GooglerSettings.SetGooglerSettings`
- `apphosting.admin.proto.LatchKeySettings.SetLatchKeySettings`
- `apphosting.admin.proto.MemcacheConfigService.SetMemcacheConfig`
- `com.google.appengine.legacy.conf_updated`
- `com.google.appengine.legacy.cron_created`
- `com.google.appengine.legacy.cron_deleted`
- `com.google.appengine.legacy.dos_configuration_changed`
- `com.google.appengine.legacy.index_created`
- `com.google.appengine.legacy.queue_created`
- `com.google.appengine.legacy.queue_updated`
- `com.google.appengine.legacy.version_deleted`
- `google.appengine.v1.Applications.CreateApplication`
- `google.appengine.v1.Applications.RepairApplication`
- `google.appengine.v1.Applications.SetIamPolicy`
- `google.appengine.v1.Applications.UpdateApplication`
- `google.appengine.v1.AuthorizedCertificates.CreateAuthorizedCertificate`
- `google.appengine.v1.AuthorizedCertificates.DeleteAuthorizedCertificate`
- `google.appengine.v1.AuthorizedCertificates.UpdateAuthorizedCertificate`
- `google.appengine.v1.DomainMappings.CreateDomainMapping`
- `google.appengine.v1.DomainMappings.DeleteDomainMapping`
- `google.appengine.v1.DomainMappings.UpdateDomainMapping`
- `google.appengine.v1.EmailSenders.CreateEmailSender`
- `google.appengine.v1.EmailSenders.DeleteEmailSender`
- `google.appengine.v1.Firewall.BatchUpdateIngressRules`
- `google.appengine.v1.Firewall.CreateIngressRule`
- `google.appengine.v1.Firewall.DeleteIngressRule`
- `google.appengine.v1.Firewall.UpdateIngressRule`
- `google.appengine.v1.Instances.DebugInstance`
- `google.appengine.v1.Instances.DeleteInstance`
- `google.appengine.v1.Services.DeleteService`
- `google.appengine.v1.Services.SetIamPolicy`
- `google.appengine.v1.Services.UpdateService`
- `google.appengine.v1.Versions.CreateVersion`
- `google.appengine.v1.Versions.DeleteVersion`
- `google.appengine.v1.Versions.UpdateVersion`
- `google.appengine.v1beta.Applications.CreateApplication`
- `google.appengine.v1beta.Applications.RepairApplication`
- `google.appengine.v1beta.Applications.UpdateApplication`
- `google.appengine.v1beta.AuthorizedCertificates.CreateAuthorizedCertificate`
- `google.appengine.v1beta.AuthorizedCertificates.DeleteAuthorizedCertificate`
- `google.appengine.v1beta.AuthorizedCertificates.UpdateAuthorizedCertificate`
- `google.appengine.v1beta.DomainMappings.CreateDomainMapping`
- `google.appengine.v1beta.DomainMappings.DeleteDomainMapping`
- `google.appengine.v1beta.DomainMappings.UpdateDomainMapping`
- `google.appengine.v1beta.Firewall.BatchUpdateIngressRules`
- `google.appengine.v1beta.Firewall.CreateIngressRule`
- `google.appengine.v1beta.Firewall.DeleteIngressRule`
- `google.appengine.v1beta.Firewall.UpdateIngressRule`
- `google.appengine.v1beta.Instances.DebugInstance`
- `google.appengine.v1beta.Instances.DeleteInstance`
- `google.appengine.v1beta.Services.DeleteService`
- `google.appengine.v1beta.Services.UpdateService`
- `google.appengine.v1beta.Versions.CreateVersion`
- `google.appengine.v1beta.Versions.DeleteVersion`
- `google.appengine.v1beta.Versions.UpdateVersion`

### Artifact Registry

#### `serviceName`

- `artifactregistry.googleapis.com`

#### `methodName`

- `Docker-Catalog`
- `Docker-DeleteManifest`
- `Docker-DeleteTag`
- `Docker-FinishUpload`
- `Docker-GetEmptyTags`
- `Docker-GetManifest`
- `Docker-GetTags`
- `Docker-PutManifest`
- `Docker-ServeBlob`
- `Docker-StartUpload`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository`
- `google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository`
- `google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository`
- `google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag`

### Assured Workloads

#### `serviceName`

- `assuredworkloads.googleapis.com`

#### `methodName`

- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.CheckAllowedOnboardingFolder`
- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.CheckOnboardingState`
- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.CreateWorkload`
- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.DeleteWorkload`
- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.GetOnboardingChecklist`
- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.GetWorkload`
- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.ListWorkloads`
- `google.cloud.assuredworkloads.v1.AssuredWorkloadsService.UpdateWorkload`
- `google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.AnalyzeWorkloadMove`
- `google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.CheckOnboardingState`
- `google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.CreateWorkload`
- `google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.DeleteWorkload`
- `google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.GetWorkload`
- `google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.ListWorkloads`
- `google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.UpdateWorkload`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.CheckAllowedOnboardingFolder`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.CheckOnboardingState`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetViolation`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListViolations`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListWorkloads`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.RestrictAllowedServices`
- `google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.UpdateWorkload`
- `google.cloud.assuredworkloads.versioning.v1main.AssuredWorkloadsV1MainService.GetWorkload`
- `google.cloud.assuredworkloads.versioning.v1main.AssuredWorkloadsV1MainService.ListViolations`

### Cloud AutoML (under Vertex AI)

#### `serviceName`

- `automl.googleapis.com`

#### `methodName`

- `google.cloud.automl.v1.AutoMl.CreateDataset`
- `google.cloud.automl.v1.AutoMl.CreateModel`
- `google.cloud.automl.v1.AutoMl.DeleteDataset`
- `google.cloud.automl.v1.AutoMl.DeleteModel`
- `google.cloud.automl.v1.AutoMl.DeployModel`
- `google.cloud.automl.v1.AutoMl.ExportData`
- `google.cloud.automl.v1.AutoMl.ExportModel`
- `google.cloud.automl.v1.AutoMl.GetDataset`
- `google.cloud.automl.v1.AutoMl.GetModel`
- `google.cloud.automl.v1.AutoMl.ImportData`
- `google.cloud.automl.v1.AutoMl.ListDatasets`
- `google.cloud.automl.v1.AutoMl.ListModelEvaluations`
- `google.cloud.automl.v1.AutoMl.ListModels`
- `google.cloud.automl.v1.AutoMl.UndeployModel`
- `google.cloud.automl.v1.PredictionService.BatchPredict`
- `google.cloud.automl.v1.PredictionService.Predict`
- `google.cloud.automl.v1beta1.AutoMl.BatchDeleteExamples`
- `google.cloud.automl.v1beta1.AutoMl.BatchManipulateAnnotations`
- `google.cloud.automl.v1beta1.AutoMl.CreateAndStartHumanAnnotationTask`
- `google.cloud.automl.v1beta1.AutoMl.CreateAnnotationSpec`
- `google.cloud.automl.v1beta1.AutoMl.CreateDataset`
- `google.cloud.automl.v1beta1.AutoMl.CreateModel`
- `google.cloud.automl.v1beta1.AutoMl.DeleteAnnotationSpec`
- `google.cloud.automl.v1beta1.AutoMl.DeleteDataset`
- `google.cloud.automl.v1beta1.AutoMl.DeleteHumanAnnotationTask`
- `google.cloud.automl.v1beta1.AutoMl.DeleteModel`
- `google.cloud.automl.v1beta1.AutoMl.DeployModel`
- `google.cloud.automl.v1beta1.AutoMl.EstimateDatasetTrainCost`
- `google.cloud.automl.v1beta1.AutoMl.EvaluateTranslationModels`
- `google.cloud.automl.v1beta1.AutoMl.ExportData`
- `google.cloud.automl.v1beta1.AutoMl.ExportEvaluatedExamples`
- `google.cloud.automl.v1beta1.AutoMl.ExportModel`
- `google.cloud.automl.v1beta1.AutoMl.GetColumnSpec`
- `google.cloud.automl.v1beta1.AutoMl.GetDataset`
- `google.cloud.automl.v1beta1.AutoMl.GetExample`
- `google.cloud.automl.v1beta1.AutoMl.GetModel`
- `google.cloud.automl.v1beta1.AutoMl.GetModelEvaluation`
- `google.cloud.automl.v1beta1.AutoMl.GetProject`
- `google.cloud.automl.v1beta1.AutoMl.GetTableSpec`
- `google.cloud.automl.v1beta1.AutoMl.ImportData`
- `google.cloud.automl.v1beta1.AutoMl.ListAnnotationSpecs`
- `google.cloud.automl.v1beta1.AutoMl.ListAnnotations`
- `google.cloud.automl.v1beta1.AutoMl.ListColumnSpecs`
- `google.cloud.automl.v1beta1.AutoMl.ListDatasets`
- `google.cloud.automl.v1beta1.AutoMl.ListExamples`
- `google.cloud.automl.v1beta1.AutoMl.ListModelEvaluations`
- `google.cloud.automl.v1beta1.AutoMl.ListModels`
- `google.cloud.automl.v1beta1.AutoMl.ListTableSpecs`
- `google.cloud.automl.v1beta1.AutoMl.SearchEvaluatedAnnotations`
- `google.cloud.automl.v1beta1.AutoMl.SearchExamples`
- `google.cloud.automl.v1beta1.AutoMl.UndeployModel`
- `google.cloud.automl.v1beta1.AutoMl.UpdateColumnSpec`
- `google.cloud.automl.v1beta1.AutoMl.UpdateDataset`
- `google.cloud.automl.v1beta1.AutoMl.UpdateModel`
- `google.cloud.automl.v1beta1.AutoMl.UpdateTableSpec`
- `google.cloud.automl.v1beta1.PredictionService.BatchPredict`
- `google.cloud.automl.v1beta1.PredictionService.Predict`
- `google.cloud.automl.v1p1beta.AutoMl.CreateDataset`
- `google.cloud.automl.v1p1beta.AutoMl.CreateModel`
- `google.cloud.automl.v1p1beta.AutoMl.DeleteDataset`
- `google.cloud.automl.v1p1beta.AutoMl.DeleteModel`
- `google.cloud.automl.v1p1beta.AutoMl.DeployModel`
- `google.cloud.automl.v1p1beta.AutoMl.ImportData`
- `google.cloud.automl.v1p1beta.AutoMl.ListDatasets`
- `google.cloud.automl.v1p1beta.AutoMl.ListModels`
- `google.cloud.automl.v1p1beta.AutoMl.UndeployModel`
- `google.cloud.automl.v1p1beta.PredictionService.Predict`
- `google.iam.v1.IAMPolicy.GetIamPolicy`
- `google.iam.v1.IAMPolicy.SetIamPolicy`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`
- `google.longrunning.Operations.WaitOperation`

### Bare Metal Solution

#### `serviceName`

- `baremetalsolution.googleapis.com`

#### `methodName`

- `google.cloud.baremetalsolution.v2.BareMetalSolution.CreateProvisioningConfig`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.GetInstance`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.GetLun`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.GetNetwork`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.GetNfsShare`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.GetProvisioningConfig`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.GetSnapshotSchedulePolicy`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.GetVolume`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListInstances`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListLuns`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListNetworkUsage`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListNetworks`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListNfsShares`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListSnapshotSchedulePolicies`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListVolumeSnapshots`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.ListVolumes`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.UpdateNetwork`
- `google.cloud.baremetalsolution.v2.BareMetalSolution.UpdateProvisioningConfig`

### BigQuery

#### `serviceName`

- `bigquery.googleapis.com`

#### `methodName`

- `google.cloud.bigquery.storage.v1.BigQueryRead.CreateReadSession`
- `google.cloud.bigquery.storage.v1.BigQueryWrite.AppendRows`
- `google.cloud.bigquery.storage.v1beta1.BigQueryStorage.CreateReadSession`
- `google.cloud.bigquery.storage.v1beta2.BigQueryRead.CreateReadSession`
- `google.cloud.bigquery.storage.v1beta2.BigQueryWrite.AppendRows`
- `google.cloud.bigquery.v2.DatasetService.DeleteDataset`
- `google.cloud.bigquery.v2.DatasetService.InsertDataset`
- `google.cloud.bigquery.v2.DatasetService.PatchDataset`
- `google.cloud.bigquery.v2.DatasetService.UpdateDataset`
- `google.cloud.bigquery.v2.JobService.DeleteJob`
- `google.cloud.bigquery.v2.JobService.GetQueryResults`
- `google.cloud.bigquery.v2.JobService.InsertJob`
- `google.cloud.bigquery.v2.JobService.Query`
- `google.cloud.bigquery.v2.ModelService.DeleteModel`
- `google.cloud.bigquery.v2.ModelService.PatchModel`
- `google.cloud.bigquery.v2.RoutineService.DeleteRoutine`
- `google.cloud.bigquery.v2.RoutineService.InsertRoutine`
- `google.cloud.bigquery.v2.RoutineService.UpdateRoutine`
- `google.cloud.bigquery.v2.TableDataService.List`
- `google.cloud.bigquery.v2.TableService.DeleteTable`
- `google.cloud.bigquery.v2.TableService.InsertTable`
- `google.cloud.bigquery.v2.TableService.PatchTable`
- `google.cloud.bigquery.v2.TableService.UpdateTable`

### BigQuery BI Engine

#### `serviceName`

- `bigquerybiengine.googleapis.com`

#### `methodName`

- `ExecutionService.Query`
- `MetadataService.BatchCreateModel`
- `MetadataService.DeleteModel`

### BigQuery Connection

#### `serviceName`

- `bigqueryconnection.googleapis.com`

#### `methodName`

- `google.cloud.bigquery.connection.v1.ConnectionService.CreateConnection`
- `google.cloud.bigquery.connection.v1.ConnectionService.DeleteConnection`
- `google.cloud.bigquery.connection.v1.ConnectionService.GetConnection`
- `google.cloud.bigquery.connection.v1.ConnectionService.GetIamPolicy`
- `google.cloud.bigquery.connection.v1.ConnectionService.ListConnections`
- `google.cloud.bigquery.connection.v1.ConnectionService.SetIamPolicy`
- `google.cloud.bigquery.connection.v1.ConnectionService.UpdateConnection`
- `google.cloud.bigquery.connection.v1.ConnectionService.UpdateConnectionCredential`

### BigQuery Data Transfer

#### `serviceName`

- `bigquerydatatransfer.googleapis.com`

#### `methodName`

- `google.cloud.bigquery.datatransfer.v1.DataTransferService.CancelTransferRun`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.CheckValidCreds`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.CreateTransferConfig`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.CreateTransferRun`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.DeleteTransferConfig`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.DeleteTransferRun`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.EnrollDataSources`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.GetDataSource`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.GetTransferConfig`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.GetTransferRun`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.IsDataTransferServiceEnabled`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.ListDataSources`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.ListTransferConfigs`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.ListTransferLogs`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.ListTransferRuns`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.ScheduleTransferRuns`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.StartManualTransferRuns`
- `google.cloud.bigquery.datatransfer.v1.DataTransferService.UpdateTransferConfig`
- `google.cloud.location.Locations.GetLocation`
- `google.cloud.location.Locations.ListLocations`

### undefined

#### `serviceName`

- `bigquerymigration.googleapis.com`

#### `methodName`

- `google.cloud.bigquery.migration.v2.MigrationService.CreateMigrationWorkflow`
- `google.cloud.bigquery.migration.v2.MigrationService.ListMigrationWorkflows`
- `google.cloud.bigquery.migration.v2.SqlTranslationService.TranslateQuery`

### BigQuery Reservation

#### `serviceName`

- `bigqueryreservation.googleapis.com`

#### `methodName`

- `google.cloud.bigquery.reservation.v1.ReservationService.CreateAssignment`
- `google.cloud.bigquery.reservation.v1.ReservationService.CreateCapacityCommitment`
- `google.cloud.bigquery.reservation.v1.ReservationService.CreateReservation`
- `google.cloud.bigquery.reservation.v1.ReservationService.DeleteAssignment`
- `google.cloud.bigquery.reservation.v1.ReservationService.DeleteCapacityCommitment`
- `google.cloud.bigquery.reservation.v1.ReservationService.DeleteReservation`
- `google.cloud.bigquery.reservation.v1.ReservationService.MergeCapacityCommitments`
- `google.cloud.bigquery.reservation.v1.ReservationService.MoveAssignment`
- `google.cloud.bigquery.reservation.v1.ReservationService.SplitCapacityCommitment`
- `google.cloud.bigquery.reservation.v1.ReservationService.UpdateAssignment`
- `google.cloud.bigquery.reservation.v1.ReservationService.UpdateBiReservation`
- `google.cloud.bigquery.reservation.v1.ReservationService.UpdateCapacityCommitment`
- `google.cloud.bigquery.reservation.v1.ReservationService.UpdateReservation`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.CreateAssignment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.CreateCapacityCommitment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.CreateReservation`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.DeleteAssignment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.DeleteCapacityCommitment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.DeleteReservation`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.MergeCapacityCommitments`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.MoveAssignment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.SplitCapacityCommitment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.UpdateAssignment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.UpdateBiReservation`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.UpdateCapacityCommitment`
- `google.cloud.bigquery.reservation.v1beta1.ReservationService.UpdateReservation`

### Cloud Bigtable Admin

#### `serviceName`

- `bigtableadmin.googleapis.com`

#### `methodName`

- `google.bigtable.admin.v2.BigtableInstanceAdmin.CreateAppProfile`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.CreateCluster`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.CreateInstance`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteAppProfile`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteCluster`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteInstance`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.GetAppProfile`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.GetCluster`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.GetIamPolicy`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.GetInstance`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.ListAppProfiles`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.ListClusters`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.ListInstances`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateCluster`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateInstance`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.SetIamPolicy`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateAppProfile`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateCluster`
- `google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateInstance`
- `google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency`
- `google.bigtable.admin.v2.BigtableTableAdmin.CreateBackup`
- `google.bigtable.admin.v2.BigtableTableAdmin.CreateTable`
- `google.bigtable.admin.v2.BigtableTableAdmin.DeleteBackup`
- `google.bigtable.admin.v2.BigtableTableAdmin.DeleteSnapshot`
- `google.bigtable.admin.v2.BigtableTableAdmin.DeleteTable`
- `google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange`
- `google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken`
- `google.bigtable.admin.v2.BigtableTableAdmin.GetBackup`
- `google.bigtable.admin.v2.BigtableTableAdmin.GetIamPolicy`
- `google.bigtable.admin.v2.BigtableTableAdmin.GetTable`
- `google.bigtable.admin.v2.BigtableTableAdmin.ListBackups`
- `google.bigtable.admin.v2.BigtableTableAdmin.ListTables`
- `google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies`
- `google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable`
- `google.bigtable.admin.v2.BigtableTableAdmin.SetIamPolicy`
- `google.bigtable.admin.v2.BigtableTableAdmin.UpdateBackup`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Binary Authorization

#### `serviceName`

- `binaryauthorization.googleapis.com`

#### `methodName`

- `google.cloud.binaryauthorization.v1.BinaryAuthorizationUiHelpersV1.SearchAvailableAttestors`
- `google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.CreateAttestor`
- `google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.DeleteAttestor`
- `google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetAttestor`
- `google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetPolicy`
- `google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.ListAttestors`
- `google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdateAttestor`
- `google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdatePolicy`
- `google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.CreatePlatformPolicy`
- `google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.DeletePlatformPolicy`
- `google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.GetPlatformPolicy`
- `google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ListPlatformPolicies`
- `google.cloud.binaryauthorization.v1.PlatformPolicyManagementService.ReplacePlatformPolicy`
- `google.cloud.binaryauthorization.v1.ValidationHelperV1.ValidateAttestationOccurrence`
- `google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.CreateAttestor`
- `google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.DeleteAttestor`
- `google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetAttestor`
- `google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetPolicy`
- `google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.ListAttestors`
- `google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdateAttestor`
- `google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdatePolicy`
- `google.iam.v1.IAMPolicy.GetIamPolicy`
- `google.iam.v1.IAMPolicy.SetIamPolicy`

### Cloud Asset

#### `serviceName`

- `cloudasset.googleapis.com`

#### `methodName`

- `AnalyzeMove`
- `google.cloud.asset.v1.AssetService.AnalyzeIamPolicy`
- `google.cloud.asset.v1.AssetService.AnalyzeIamPolicyLongrunning`
- `google.cloud.asset.v1.AssetService.BatchGetAssetsHistory`
- `google.cloud.asset.v1.AssetService.CreateFeed`
- `google.cloud.asset.v1.AssetService.DeleteFeed`
- `google.cloud.asset.v1.AssetService.ExportAssets`
- `google.cloud.asset.v1.AssetService.GetFeed`
- `google.cloud.asset.v1.AssetService.ListAssets`
- `google.cloud.asset.v1.AssetService.ListFeeds`
- `google.cloud.asset.v1.AssetService.QueryAssets`
- `google.cloud.asset.v1.AssetService.SearchAllIamPolicies`
- `google.cloud.asset.v1.AssetService.SearchAllResources`
- `google.cloud.asset.v1.AssetService.UpdateFeed`
- `google.cloud.asset.v1beta1.AssetService.BatchGetAssetsHistory`
- `google.cloud.asset.v1beta1.AssetService.ExportAssets`
- `google.cloud.asset.v1p1beta1.AssetService.SearchAllIamPolicies`
- `google.cloud.asset.v1p1beta1.AssetService.SearchAllResources`
- `google.cloud.asset.v1p2beta1.AssetService.CreateFeed`
- `google.cloud.asset.v1p2beta1.AssetService.ListFeeds`
- `google.cloud.asset.v1p4beta1.AssetService.AnalyzeIamPolicy`
- `google.cloud.asset.v1p4beta1.AssetService.ExportIamPolicyAnalysis`
- `google.cloud.asset.v1p5beta1.AssetService.ListAssets`
- `google.cloud.asset.v1p7beta1.AssetService.ExportAssets`
- `google.longrunning.Operations.ListOperations`

### Cloud Billing

#### `serviceName`

- `cloudbilling.googleapis.com`

#### `methodName`

- `ActivateInstrumentlessBillingAccount`
- `AssignProjectToBillingAccount`
- `AssignResourceToBillingAccount`
- `CheckReopenability`
- `CloseBillingAccount`
- `CreateBillingAccount`
- `DisableResourceBilling`
- `GetBillingAccount`
- `GetIamPolicy`
- `GetResourceBillingInfo`
- `GetResourceBillingInfoBatch`
- `ListBillingAccountResources`
- `ListBillingAccounts`
- `ListProjectIdentifiers`
- `MigrateAccountSettings`
- `MigrateBillableServices`
- `ReopenBillingAccount`
- `SetIamPolicy`
- `UpdateBillingAccountCurrency`
- `UpdateBillingAccountDisplayName`
- `UpdateBillingAccountPurchaseOrderNumber`
- `UpdateParentOrganization`
- `UpdateResourceBillingProtection`
- `UpgradeFreeTrial`

### Cloud Build

#### `serviceName`

- `cloudbuild.googleapis.com`

#### `methodName`

- `CloudBuildClusterProxy.CancelBuild`
- `CloudBuildClusterProxy.CreateBuild`
- `google.devtools.cloudbuild.v1.CloudBuild.AddBitbucketServerConnectedRepository`
- `google.devtools.cloudbuild.v1.CloudBuild.ApproveBuild`
- `google.devtools.cloudbuild.v1.CloudBuild.BatchCreateGitLabConnectedRepositories`
- `google.devtools.cloudbuild.v1.CloudBuild.CancelBuild`
- `google.devtools.cloudbuild.v1.CloudBuild.CreateBitbucketServerConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.CreateBuild`
- `google.devtools.cloudbuild.v1.CloudBuild.CreateBuildTrigger`
- `google.devtools.cloudbuild.v1.CloudBuild.CreateGitHubEnterpriseConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.CreateWorkerPool`
- `google.devtools.cloudbuild.v1.CloudBuild.DeleteBitbucketServerConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.DeleteBuildTrigger`
- `google.devtools.cloudbuild.v1.CloudBuild.DeleteGitHubEnterpriseConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.DeleteGitHubInstallation`
- `google.devtools.cloudbuild.v1.CloudBuild.DeleteGitLabConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.DeleteWorkerPool`
- `google.devtools.cloudbuild.v1.CloudBuild.GetBitbucketServerConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.GetBuild`
- `google.devtools.cloudbuild.v1.CloudBuild.GetBuildTrigger`
- `google.devtools.cloudbuild.v1.CloudBuild.GetGitHubEnterpriseApp`
- `google.devtools.cloudbuild.v1.CloudBuild.GetGitHubEnterpriseConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.GetGlobalTriggerSettings`
- `google.devtools.cloudbuild.v1.CloudBuild.GetWorkerPool`
- `google.devtools.cloudbuild.v1.CloudBuild.ListBitbucketServerConfigs`
- `google.devtools.cloudbuild.v1.CloudBuild.ListBitbucketServerRepositories`
- `google.devtools.cloudbuild.v1.CloudBuild.ListBuildTriggers`
- `google.devtools.cloudbuild.v1.CloudBuild.ListBuilds`
- `google.devtools.cloudbuild.v1.CloudBuild.ListGitHubEnterpriseConfigs`
- `google.devtools.cloudbuild.v1.CloudBuild.ListGitHubInstallationsForProject`
- `google.devtools.cloudbuild.v1.CloudBuild.ListGitHubRefs`
- `google.devtools.cloudbuild.v1.CloudBuild.ListTags`
- `google.devtools.cloudbuild.v1.CloudBuild.ListWorkerPools`
- `google.devtools.cloudbuild.v1.CloudBuild.ProcessAppManifestCallback`
- `google.devtools.cloudbuild.v1.CloudBuild.RemoveBitbucketServerConnectedRepository`
- `google.devtools.cloudbuild.v1.CloudBuild.RetryBuild`
- `google.devtools.cloudbuild.v1.CloudBuild.RunBuildTrigger`
- `google.devtools.cloudbuild.v1.CloudBuild.UpdateBitbucketServerConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.UpdateBuildTrigger`
- `google.devtools.cloudbuild.v1.CloudBuild.UpdateGitHubEnterpriseConfig`
- `google.devtools.cloudbuild.v1.CloudBuild.UpdateGitHubInstallation`
- `google.devtools.cloudbuild.v1.CloudBuild.UpdateGlobalTriggerSettings`
- `google.devtools.cloudbuild.v1.CloudBuild.UpdateWorkerPool`
- `google.devtools.cloudbuild.v1.ReceiveWebhook`
- `google.devtools.cloudbuild.v1beta1.CloudBuild.CreateWorkerPool`
- `google.devtools.cloudbuild.v1beta1.CloudBuild.DeleteWorkerPool`
- `google.devtools.cloudbuild.v1beta1.CloudBuild.GetWorkerPool`
- `google.devtools.cloudbuild.v1beta1.CloudBuild.ListWorkerPools`
- `google.devtools.cloudbuild.v1beta1.CloudBuild.UpdateWorkerPool`
- `google.devtools.cloudbuild.v2.CloudBuild.CreateTaskRun`
- `google.devtools.cloudbuild.v2.CloudBuild.CreateWorkflow`
- `google.devtools.cloudbuild.v2.CloudBuild.DeleteWorkflow`
- `google.devtools.cloudbuild.v2.CloudBuild.GetRecord`
- `google.devtools.cloudbuild.v2.CloudBuild.GetResult`
- `google.devtools.cloudbuild.v2.CloudBuild.GetTaskRun`
- `google.devtools.cloudbuild.v2.CloudBuild.GetWorkflow`
- `google.devtools.cloudbuild.v2.CloudBuild.ListRecords`
- `google.devtools.cloudbuild.v2.CloudBuild.ListResults`
- `google.devtools.cloudbuild.v2.CloudBuild.ListTaskRuns`
- `google.devtools.cloudbuild.v2.CloudBuild.RunWorkflow`
- `google.devtools.cloudbuild.v2.CloudBuild.UpdateTaskRun`
- `google.devtools.cloudbuild.v2.CloudBuild.UpdateWorkflow`
- `google.longrunning.Operations.CancelOperation`

### Cloud Debugger

#### `serviceName`

- `clouddebugger.googleapis.com`

#### `methodName`

- `DeleteBreakpoint`
- `GetBreakpoint`
- `ListBreakpoints`
- `ListDebuggees`
- `SetBreakpoint`

### Cloud Deployment Manager

#### `serviceName`

- `clouddeploy.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.deploy.v1.CloudDeploy.ApproveRollout`
- `google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipeline`
- `google.cloud.deploy.v1.CloudDeploy.CreateRelease`
- `google.cloud.deploy.v1.CloudDeploy.CreateRollout`
- `google.cloud.deploy.v1.CloudDeploy.CreateTarget`
- `google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipeline`
- `google.cloud.deploy.v1.CloudDeploy.DeleteTarget`
- `google.cloud.deploy.v1.CloudDeploy.GetConfig`
- `google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipeline`
- `google.cloud.deploy.v1.CloudDeploy.GetRelease`
- `google.cloud.deploy.v1.CloudDeploy.GetRollout`
- `google.cloud.deploy.v1.CloudDeploy.GetTarget`
- `google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelines`
- `google.cloud.deploy.v1.CloudDeploy.ListReleases`
- `google.cloud.deploy.v1.CloudDeploy.ListRollouts`
- `google.cloud.deploy.v1.CloudDeploy.ListTargets`
- `google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipeline`
- `google.cloud.deploy.v1.CloudDeploy.UpdateTarget`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud Error Reporting

#### `serviceName`

- `clouderrorreporting.googleapis.com`

#### `methodName`

- `google.devtools.clouderrorreporting.v1.ErrorGroupService.GetGroup`
- `google.devtools.clouderrorreporting.v1.ErrorGroupService.UpdateGroup`
- `google.devtools.clouderrorreporting.v1.ErrorStatsService.DeleteEvents`
- `google.devtools.clouderrorreporting.v1.ErrorStatsService.ListEvents`
- `google.devtools.clouderrorreporting.v1.ErrorStatsService.ListGroupStats`
- `google.devtools.clouderrorreporting.v1.ErrorStatsService.ListServices`

### Cloud Functions

#### `serviceName`

- `cloudfunctions.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.functions.v1.CloudFunctionsService.CallFunction`
- `google.cloud.functions.v1.CloudFunctionsService.CreateFunction`
- `google.cloud.functions.v1.CloudFunctionsService.DeleteFunction`
- `google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrl`
- `google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrl`
- `google.cloud.functions.v1.CloudFunctionsService.GetFunction`
- `google.cloud.functions.v1.CloudFunctionsService.GetIamPolicy`
- `google.cloud.functions.v1.CloudFunctionsService.ListFunctions`
- `google.cloud.functions.v1.CloudFunctionsService.SetIamPolicy`
- `google.cloud.functions.v1.CloudFunctionsService.UpdateFunction`
- `google.cloud.functions.v2beta.FunctionService.CreateFunction`
- `google.cloud.functions.v2beta.FunctionService.DeleteFunction`
- `google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrl`
- `google.cloud.functions.v2beta.FunctionService.GenerateUploadUrl`
- `google.cloud.functions.v2beta.FunctionService.GetFunction`
- `google.cloud.functions.v2beta.FunctionService.ListFunctions`
- `google.cloud.functions.v2beta.FunctionService.ListRuntimes`
- `google.cloud.functions.v2beta.FunctionService.UpdateFunction`
- `google.cloud.functions.v2main.FunctionService.CreateFunction`
- `google.cloud.functions.v2main.FunctionService.ListFunctions`
- `google.cloud.location.Locations.ListLocations`
- `google.longrunning.Operations.GetOperation`

### Cloud Identity

#### `serviceName`

- `cloudidentity.googleapis.com`

#### `methodName`

- `google.apps.cloudidentity.groups.v1.GroupsService.UpdateGroup`
- `google.apps.cloudidentity.groups.v1.MembershipsService.UpdateMembership`

### Cloud IoT

#### `serviceName`

- `cloudiot.googleapis.com`

#### `methodName`

- `google.cloud.iot.v1.DeviceManager.AddDeviceToGroup`
- `google.cloud.iot.v1.DeviceManager.BatchGetGroupMembershipsForDevice`
- `google.cloud.iot.v1.DeviceManager.BindDeviceToGateway`
- `google.cloud.iot.v1.DeviceManager.CreateDevice`
- `google.cloud.iot.v1.DeviceManager.CreateDeviceRegistry`
- `google.cloud.iot.v1.DeviceManager.CreateGroup`
- `google.cloud.iot.v1.DeviceManager.DeleteDevice`
- `google.cloud.iot.v1.DeviceManager.DeleteDeviceRegistry`
- `google.cloud.iot.v1.DeviceManager.DeleteGroup`
- `google.cloud.iot.v1.DeviceManager.GetDevice`
- `google.cloud.iot.v1.DeviceManager.GetDeviceRegistry`
- `google.cloud.iot.v1.DeviceManager.GetGroup`
- `google.cloud.iot.v1.DeviceManager.GetIamPolicy`
- `google.cloud.iot.v1.DeviceManager.ListDeviceConfigVersions`
- `google.cloud.iot.v1.DeviceManager.ListDeviceIdsForGateway`
- `google.cloud.iot.v1.DeviceManager.ListDeviceRegistries`
- `google.cloud.iot.v1.DeviceManager.ListDeviceStates`
- `google.cloud.iot.v1.DeviceManager.ListDevices`
- `google.cloud.iot.v1.DeviceManager.ListGroups`
- `google.cloud.iot.v1.DeviceManager.ModifyCloudToDeviceConfig`
- `google.cloud.iot.v1.DeviceManager.RemoveDeviceFromGroup`
- `google.cloud.iot.v1.DeviceManager.SendCommandToDevice`
- `google.cloud.iot.v1.DeviceManager.SetIamPolicy`
- `google.cloud.iot.v1.DeviceManager.UnbindDeviceFromGateway`
- `google.cloud.iot.v1.DeviceManager.UpdateDevice`
- `google.cloud.iot.v1.DeviceManager.UpdateDeviceRegistry`

### Cloud Key Management Service (KMS)

#### `serviceName`

- `cloudkms.googleapis.com`

#### `methodName`

- `AsymmetricDecrypt`
- `AsymmetricSign`
- `CreateCryptoKey`
- `CreateCryptoKeyVersion`
- `CreateEkmConnection`
- `CreateImportJob`
- `CreateKeyRing`
- `Decrypt`
- `DestroyCryptoKeyVersion`
- `Encrypt`
- `GetCryptoKey`
- `GetCryptoKeyVersion`
- `GetEkmConnection`
- `GetIamPolicy`
- `GetImportJob`
- `GetKeyRing`
- `GetPublicKey`
- `ImportCryptoKeyVersion`
- `ListCryptoKeyVersions`
- `ListCryptoKeys`
- `ListEkmConnections`
- `ListImportJobs`
- `ListKeyRings`
- `MacSign`
- `MacVerify`
- `RawDecrypt`
- `RawEncrypt`
- `RestoreCryptoKeyVersion`
- `SetIamPolicy`
- `UpdateCryptoKey`
- `UpdateCryptoKeyPrimaryVersion`
- `UpdateCryptoKeyVersion`
- `UpdateEkmConnection`

### Cloud Profiler

#### `serviceName`

- `cloudprofiler.googleapis.com`

#### `methodName`

- `google.devtools.cloudprofiler.v2.ProfilerService.CreateOfflineProfile`
- `google.devtools.cloudprofiler.v2.ProfilerService.CreateProfile`
- `google.devtools.cloudprofiler.v2.ProfilerService.UpdateProfile`

### Cloud Resource Manager

#### `serviceName`

- `cloudresourcemanager.googleapis.com`

#### `methodName`

- `AcceptProjectOwnership`
- `CheckInvitationRequired`
- `ClearOrgPolicy`
- `CloudResourceManagerFoldersV3Service-SearchFolders`
- `CloudResourceManagerOrganizationsV3Service-SearchOrganizations`
- `CreateFolder`
- `CreateProject`
- `DeleteFolder`
- `DeleteProject`
- `FindOrCreateOrganization`
- `GetContactInfo`
- `GetEffectiveOrgPolicy`
- `GetFolder`
- `GetIamPolicy`
- `GetOrgPolicy`
- `GetOrganization`
- `GetProject`
- `InsertProjectOwnershipInvite`
- `InsertProjectOwnershipInviteForPantheon`
- `ListAvailableOrgPolicyConstraints`
- `ListFolders`
- `ListOrgPolicies`
- `ListProjectOwnershipInvites`
- `ListResources`
- `MoveFolder`
- `SearchProjects`
- `SetIamPolicy`
- `SetOrgPolicy`
- `UndeleteFolder`
- `UndeleteProject`
- `UpdateContactInfo`
- `UpdateFolder`
- `UpdateProject`
- `google.cloud.lien.v1.Liens.CreateLien`
- `google.cloud.lien.v1.Liens.DeleteLien`
- `google.cloud.lien.v1.Liens.ListLiens`
- `google.cloud.resourcemanager.v3.Folders.CreateFolder`
- `google.cloud.resourcemanager.v3.Folders.DeleteFolder`
- `google.cloud.resourcemanager.v3.Folders.GetFolder`
- `google.cloud.resourcemanager.v3.Folders.GetIamPolicy`
- `google.cloud.resourcemanager.v3.Folders.ListFolders`
- `google.cloud.resourcemanager.v3.Folders.MoveFolder`
- `google.cloud.resourcemanager.v3.Folders.SetIamPolicy`
- `google.cloud.resourcemanager.v3.Folders.UndeleteFolder`
- `google.cloud.resourcemanager.v3.Folders.UpdateFolder`
- `google.cloud.resourcemanager.v3.Organizations.GetIamPolicy`
- `google.cloud.resourcemanager.v3.Organizations.GetOrganization`
- `google.cloud.resourcemanager.v3.Organizations.SetIamPolicy`
- `google.cloud.resourcemanager.v3.Projects.CreateProject`
- `google.cloud.resourcemanager.v3.Projects.DeleteProject`
- `google.cloud.resourcemanager.v3.Projects.GetIamPolicy`
- `google.cloud.resourcemanager.v3.Projects.GetProject`
- `google.cloud.resourcemanager.v3.Projects.ListProjects`
- `google.cloud.resourcemanager.v3.Projects.MoveProject`
- `google.cloud.resourcemanager.v3.Projects.SetIamPolicy`
- `google.cloud.resourcemanager.v3.Projects.UndeleteProject`
- `google.cloud.resourcemanager.v3.Projects.UpdateProject`
- `google.cloud.resourcemanager.v3.TagBindings.CreateTagBinding`
- `google.cloud.resourcemanager.v3.TagBindings.DeleteTagBinding`
- `google.cloud.resourcemanager.v3.TagBindings.ListEffectiveTags`
- `google.cloud.resourcemanager.v3.TagBindings.ListTagBindings`
- `google.cloud.resourcemanager.v3.TagBindingsBulk.SetTagsForResource`
- `google.cloud.resourcemanager.v3.TagKeys.CreateTagKey`
- `google.cloud.resourcemanager.v3.TagKeys.DeleteTagKey`
- `google.cloud.resourcemanager.v3.TagKeys.GetIamPolicy`
- `google.cloud.resourcemanager.v3.TagKeys.GetTagKey`
- `google.cloud.resourcemanager.v3.TagKeys.ListTagKeys`
- `google.cloud.resourcemanager.v3.TagKeys.SetIamPolicy`
- `google.cloud.resourcemanager.v3.TagKeys.UpdateTagKey`
- `google.cloud.resourcemanager.v3.TagValues.CreateTagValue`
- `google.cloud.resourcemanager.v3.TagValues.DeleteTagValue`
- `google.cloud.resourcemanager.v3.TagValues.GetIamPolicy`
- `google.cloud.resourcemanager.v3.TagValues.GetTagValue`
- `google.cloud.resourcemanager.v3.TagValues.ListTagValues`
- `google.cloud.resourcemanager.v3.TagValues.SetIamPolicy`
- `google.cloud.resourcemanager.v3.TagValues.UpdateTagValue`

### Cloud Scheduler

#### `serviceName`

- `cloudscheduler.googleapis.com`

#### `methodName`

- `google.cloud.scheduler.v1.CloudScheduler.CreateJob`
- `google.cloud.scheduler.v1.CloudScheduler.DeleteJob`
- `google.cloud.scheduler.v1.CloudScheduler.GetJob`
- `google.cloud.scheduler.v1.CloudScheduler.ListJobs`
- `google.cloud.scheduler.v1.CloudScheduler.PauseJob`
- `google.cloud.scheduler.v1.CloudScheduler.ResumeJob`
- `google.cloud.scheduler.v1.CloudScheduler.RunJob`
- `google.cloud.scheduler.v1.CloudScheduler.UpdateJob`
- `google.cloud.scheduler.v1beta1.CloudScheduler.CreateJob`
- `google.cloud.scheduler.v1beta1.CloudScheduler.DeleteJob`
- `google.cloud.scheduler.v1beta1.CloudScheduler.GetJob`
- `google.cloud.scheduler.v1beta1.CloudScheduler.ListJobs`
- `google.cloud.scheduler.v1beta1.CloudScheduler.PauseJob`
- `google.cloud.scheduler.v1beta1.CloudScheduler.ResumeJob`
- `google.cloud.scheduler.v1beta1.CloudScheduler.RunJob`
- `google.cloud.scheduler.v1beta1.CloudScheduler.UpdateJob`

### Cloud Search

#### `serviceName`

- `cloudsearch.googleapis.com`

#### `methodName`

- `google.apps.search.v1.CustomerService.GetCustomerSettings`
- `google.apps.search.v1.CustomerService.UpdateCustomerSettings`
- `google.apps.search.v1.DebuggingService.CheckAccess`
- `google.apps.search.v1.DebuggingService.SearchItemsByViewUrl`
- `google.apps.search.v1.ItemsService.DeleteItem`
- `google.apps.search.v1.ItemsService.DeleteQueueItems`
- `google.apps.search.v1.ItemsService.GetItem`
- `google.apps.search.v1.ItemsService.IndexItem`
- `google.apps.search.v1.ItemsService.ListItems`
- `google.apps.search.v1.ItemsService.PollItems`
- `google.apps.search.v1.ItemsService.PushItem`
- `google.apps.search.v1.ItemsService.StartUploadItem`
- `google.apps.search.v1.ItemsService.UnreserveItems`
- `google.apps.search.v1.QueryService.ListQuerySources`
- `google.apps.search.v1.QueryService.Search`
- `google.apps.search.v1.QueryService.Suggest`
- `google.apps.search.v1.SchemaService.DeleteSchema`
- `google.apps.search.v1.SchemaService.GetSchema`
- `google.apps.search.v1.SchemaService.UpdateSchema`
- `google.apps.search.v1.SearchApplicationsService.CreateSearchApplication`
- `google.apps.search.v1.SearchApplicationsService.DeleteSearchApplication`
- `google.apps.search.v1.SearchApplicationsService.GetSearchApplication`
- `google.apps.search.v1.SearchApplicationsService.ListSearchApplications`
- `google.apps.search.v1.SearchApplicationsService.ResetSearchApplication`
- `google.apps.search.v1.SearchApplicationsService.UpdateSearchApplication`
- `google.apps.search.v1.SettingsService.CreateDataSource`
- `google.apps.search.v1.SettingsService.DeleteDataSource`
- `google.apps.search.v1.SettingsService.GetDataSource`
- `google.apps.search.v1.SettingsService.ListDataSource`
- `google.apps.search.v1.SettingsService.UpdateDataSource`
- `google.apps.search.v1.StatsService.GetCustomerIndexStats`
- `google.apps.search.v1.StatsService.GetCustomerQueryStats`
- `google.apps.search.v1.StatsService.GetCustomerSearchApplicationStats`
- `google.apps.search.v1.StatsService.GetCustomerSessionStats`
- `google.apps.search.v1.StatsService.GetCustomerUserStats`
- `google.apps.search.v1.StatsService.GetDataSourceIndexStats`
- `google.apps.search.v1.StatsService.GetSearchApplicationQueryStats`
- `google.apps.search.v1.StatsService.GetSearchApplicationSessionStats`
- `google.apps.search.v1.StatsService.GetSearchApplicationUserStats`
- `google.apps.search.v1.UnmappedIdentityService.ListItemNamesForUnmappedIdentity`
- `google.apps.search.v1.UnmappedIdentityService.ListUnmappedIdentitiesByIdentitySource`
- `google.apps.search.v1.UnmappedIdentityService.ListUnmappedIdentitiesForItem`
- `google.bytestream.ByteStream.Write`
- `google.cloudsearch.IdentitySourceService.CreateIdentitySource`
- `google.cloudsearch.IdentitySourceService.DeleteIdentitySource`
- `google.cloudsearch.IdentitySourceService.GetIdentitySource`
- `google.cloudsearch.IdentitySourceService.ListIdentitySources`
- `google.cloudsearch.IdentitySourceService.UpdateIdentitySource`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud SQL

#### `serviceName`

- `cloudsql.googleapis.com`

#### `methodName`

- `cloudsql.backupRuns.create`
- `cloudsql.backupRuns.delete`
- `cloudsql.backupRuns.get`
- `cloudsql.backupRuns.list`
- `cloudsql.databases.create`
- `cloudsql.databases.delete`
- `cloudsql.databases.get`
- `cloudsql.databases.list`
- `cloudsql.databases.update`
- `cloudsql.instances.addServerCa`
- `cloudsql.instances.clone`
- `cloudsql.instances.connect`
- `cloudsql.instances.create`
- `cloudsql.instances.delete`
- `cloudsql.instances.demoteMaster`
- `cloudsql.instances.export`
- `cloudsql.instances.failover`
- `cloudsql.instances.get`
- `cloudsql.instances.import`
- `cloudsql.instances.list`
- `cloudsql.instances.listServerCas`
- `cloudsql.instances.login`
- `cloudsql.instances.migrate`
- `cloudsql.instances.promoteReplica`
- `cloudsql.instances.query`
- `cloudsql.instances.resetSslConfig`
- `cloudsql.instances.restart`
- `cloudsql.instances.restoreBackup`
- `cloudsql.instances.rotateServerCa`
- `cloudsql.instances.startReplica`
- `cloudsql.instances.stopReplica`
- `cloudsql.instances.truncateLog`
- `cloudsql.instances.update`
- `cloudsql.sslCerts.create`
- `cloudsql.sslCerts.delete`
- `cloudsql.sslCerts.get`
- `cloudsql.sslCerts.list`
- `cloudsql.users.create`
- `cloudsql.users.delete`
- `cloudsql.users.list`
- `cloudsql.users.update`

### Cloud Tasks

#### `serviceName`

- `cloudtasks.googleapis.com`

#### `methodName`

- `google.cloud.tasks.v2.CloudTasks.CreateQueue`
- `google.cloud.tasks.v2.CloudTasks.DeleteQueue`
- `google.cloud.tasks.v2.CloudTasks.DeleteTask`
- `google.cloud.tasks.v2.CloudTasks.GetIamPolicy`
- `google.cloud.tasks.v2.CloudTasks.GetQueue`
- `google.cloud.tasks.v2.CloudTasks.GetTask`
- `google.cloud.tasks.v2.CloudTasks.ListQueues`
- `google.cloud.tasks.v2.CloudTasks.ListTasks`
- `google.cloud.tasks.v2.CloudTasks.PauseQueue`
- `google.cloud.tasks.v2.CloudTasks.PurgeQueue`
- `google.cloud.tasks.v2.CloudTasks.ResumeQueue`
- `google.cloud.tasks.v2.CloudTasks.RunTask`
- `google.cloud.tasks.v2.CloudTasks.SetIamPolicy`
- `google.cloud.tasks.v2.CloudTasks.UpdateQueue`
- `google.cloud.tasks.v2beta2.CloudTasks.CreateQueue`
- `google.cloud.tasks.v2beta2.CloudTasks.DeleteQueue`
- `google.cloud.tasks.v2beta2.CloudTasks.DeleteTask`
- `google.cloud.tasks.v2beta2.CloudTasks.GetIamPolicy`
- `google.cloud.tasks.v2beta2.CloudTasks.GetQueue`
- `google.cloud.tasks.v2beta2.CloudTasks.GetTask`
- `google.cloud.tasks.v2beta2.CloudTasks.ListQueues`
- `google.cloud.tasks.v2beta2.CloudTasks.ListTasks`
- `google.cloud.tasks.v2beta2.CloudTasks.PauseQueue`
- `google.cloud.tasks.v2beta2.CloudTasks.PurgeQueue`
- `google.cloud.tasks.v2beta2.CloudTasks.ResumeQueue`
- `google.cloud.tasks.v2beta2.CloudTasks.SetIamPolicy`
- `google.cloud.tasks.v2beta2.CloudTasks.UpdateQueue`
- `google.cloud.tasks.v2beta3.CloudTasks.CreateQueue`
- `google.cloud.tasks.v2beta3.CloudTasks.DeleteQueue`
- `google.cloud.tasks.v2beta3.CloudTasks.DeleteTask`
- `google.cloud.tasks.v2beta3.CloudTasks.GetIamPolicy`
- `google.cloud.tasks.v2beta3.CloudTasks.GetQueue`
- `google.cloud.tasks.v2beta3.CloudTasks.GetTask`
- `google.cloud.tasks.v2beta3.CloudTasks.ListQueues`
- `google.cloud.tasks.v2beta3.CloudTasks.ListTasks`
- `google.cloud.tasks.v2beta3.CloudTasks.PauseQueue`
- `google.cloud.tasks.v2beta3.CloudTasks.PurgeQueue`
- `google.cloud.tasks.v2beta3.CloudTasks.ResumeQueue`
- `google.cloud.tasks.v2beta3.CloudTasks.RunTask`
- `google.cloud.tasks.v2beta3.CloudTasks.SetIamPolicy`
- `google.cloud.tasks.v2beta3.CloudTasks.UpdateQueue`

### Cloud Trace

#### `serviceName`

- `cloudtrace.googleapis.com`

#### `methodName`

- `google.devtools.cloudtrace.v1.TraceService.GetTrace`
- `google.devtools.cloudtrace.v1.TraceService.ListTraces`
- `google.devtools.cloudtrace.v2.TraceService.ListSpans`
- `google.devtools.cloudtrace.v2.TraceService.ListTraces`

### Cloud Composer

#### `serviceName`

- `composer.googleapis.com`

#### `methodName`

- `google.cloud.orchestration.airflow.service.v1.Environments.CreateEnvironment`
- `google.cloud.orchestration.airflow.service.v1.Environments.DeleteEnvironment`
- `google.cloud.orchestration.airflow.service.v1.Environments.GetEnvironment`
- `google.cloud.orchestration.airflow.service.v1.Environments.ListEnvironments`
- `google.cloud.orchestration.airflow.service.v1.Environments.UpdateEnvironment`
- `google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersions`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.CheckUpgrade`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateEnvironment`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.GetEnvironment`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.ListEnvironments`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.LoadSnapshot`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot`
- `google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateEnvironment`
- `google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersions`
- `google.longrunning.Operations.DeleteOperation`

### Compute Engine

#### `serviceName`

- `compute.googleapis.com`

#### `methodName`

- `beta.compute.acceleratorTypes.aggregatedList`
- `beta.compute.acceleratorTypes.list`
- `beta.compute.addresses.aggregatedList`
- `beta.compute.addresses.delete`
- `beta.compute.addresses.get`
- `beta.compute.addresses.insert`
- `beta.compute.addresses.list`
- `beta.compute.addresses.setLabels`
- `beta.compute.addresses.testIamPermissions`
- `beta.compute.autoscalers.aggregatedList`
- `beta.compute.autoscalers.delete`
- `beta.compute.autoscalers.get`
- `beta.compute.autoscalers.insert`
- `beta.compute.autoscalers.list`
- `beta.compute.autoscalers.patch`
- `beta.compute.autoscalers.testIamPermissions`
- `beta.compute.autoscalers.update`
- `beta.compute.backendBuckets.addSignedUrlKey`
- `beta.compute.backendBuckets.delete`
- `beta.compute.backendBuckets.deleteSignedUrlKey`
- `beta.compute.backendBuckets.get`
- `beta.compute.backendBuckets.getIamPolicy`
- `beta.compute.backendBuckets.insert`
- `beta.compute.backendBuckets.list`
- `beta.compute.backendBuckets.patch`
- `beta.compute.backendBuckets.setEdgeSecurityPolicy`
- `beta.compute.backendBuckets.setIamPolicy`
- `beta.compute.backendBuckets.testIamPermissions`
- `beta.compute.backendBuckets.update`
- `beta.compute.backendServices.addSignedUrlKey`
- `beta.compute.backendServices.aggregatedList`
- `beta.compute.backendServices.delete`
- `beta.compute.backendServices.deleteSignedUrlKey`
- `beta.compute.backendServices.get`
- `beta.compute.backendServices.getHealth`
- `beta.compute.backendServices.getIamPolicy`
- `beta.compute.backendServices.insert`
- `beta.compute.backendServices.list`
- `beta.compute.backendServices.patch`
- `beta.compute.backendServices.setEdgeSecurityPolicy`
- `beta.compute.backendServices.setIamPolicy`
- `beta.compute.backendServices.setSecurityPolicy`
- `beta.compute.backendServices.testIamPermissions`
- `beta.compute.backendServices.update`
- `beta.compute.diskTypes.aggregatedList`
- `beta.compute.diskTypes.get`
- `beta.compute.diskTypes.list`
- `beta.compute.disks.addResourcePolicies`
- `beta.compute.disks.aggregatedList`
- `beta.compute.disks.createSnapshot`
- `beta.compute.disks.delete`
- `beta.compute.disks.get`
- `beta.compute.disks.getIamPolicy`
- `beta.compute.disks.insert`
- `beta.compute.disks.list`
- `beta.compute.disks.removeResourcePolicies`
- `beta.compute.disks.resize`
- `beta.compute.disks.setIamPolicy`
- `beta.compute.disks.setLabels`
- `beta.compute.disks.testIamPermissions`
- `beta.compute.disks.update`
- `beta.compute.externalVpnGateways.delete`
- `beta.compute.externalVpnGateways.get`
- `beta.compute.externalVpnGateways.insert`
- `beta.compute.externalVpnGateways.list`
- `beta.compute.externalVpnGateways.setLabels`
- `beta.compute.externalVpnGateways.testIamPermissions`
- `beta.compute.firewallPolicies.addAssociation`
- `beta.compute.firewallPolicies.addRule`
- `beta.compute.firewallPolicies.delete`
- `beta.compute.firewallPolicies.get`
- `beta.compute.firewallPolicies.getAssociation`
- `beta.compute.firewallPolicies.getRule`
- `beta.compute.firewallPolicies.insert`
- `beta.compute.firewallPolicies.list`
- `beta.compute.firewallPolicies.listAssociations`
- `beta.compute.firewallPolicies.move`
- `beta.compute.firewallPolicies.patch`
- `beta.compute.firewallPolicies.patchRule`
- `beta.compute.firewallPolicies.removeAssociation`
- `beta.compute.firewallPolicies.removeRule`
- `beta.compute.firewalls.delete`
- `beta.compute.firewalls.get`
- `beta.compute.firewalls.insert`
- `beta.compute.firewalls.list`
- `beta.compute.firewalls.patch`
- `beta.compute.firewalls.testIamPermissions`
- `beta.compute.firewalls.update`
- `beta.compute.forwardingRules.aggregatedList`
- `beta.compute.forwardingRules.delete`
- `beta.compute.forwardingRules.get`
- `beta.compute.forwardingRules.insert`
- `beta.compute.forwardingRules.list`
- `beta.compute.forwardingRules.patch`
- `beta.compute.forwardingRules.setLabels`
- `beta.compute.forwardingRules.setTarget`
- `beta.compute.forwardingRules.testIamPermissions`
- `beta.compute.globalAddresses.delete`
- `beta.compute.globalAddresses.get`
- `beta.compute.globalAddresses.insert`
- `beta.compute.globalAddresses.list`
- `beta.compute.globalAddresses.setLabels`
- `beta.compute.globalAddresses.testIamPermissions`
- `beta.compute.globalForwardingRules.delete`
- `beta.compute.globalForwardingRules.get`
- `beta.compute.globalForwardingRules.insert`
- `beta.compute.globalForwardingRules.list`
- `beta.compute.globalForwardingRules.setLabels`
- `beta.compute.globalForwardingRules.setTarget`
- `beta.compute.globalForwardingRules.testIamPermissions`
- `beta.compute.globalNetworkEndpointGroups.attachNetworkEndpoints`
- `beta.compute.globalNetworkEndpointGroups.delete`
- `beta.compute.globalNetworkEndpointGroups.detachNetworkEndpoints`
- `beta.compute.globalNetworkEndpointGroups.get`
- `beta.compute.globalNetworkEndpointGroups.insert`
- `beta.compute.globalNetworkEndpointGroups.list`
- `beta.compute.globalNetworkEndpointGroups.listNetworkEndpoints`
- `beta.compute.globalOperations.aggregatedList`
- `beta.compute.globalOperations.delete`
- `beta.compute.globalOperations.get`
- `beta.compute.globalOperations.list`
- `beta.compute.globalOperations.wait`
- `beta.compute.globalOrganizationOperations.get`
- `beta.compute.globalPublicDelegatedPrefixes.get`
- `beta.compute.globalPublicDelegatedPrefixes.list`
- `beta.compute.healthChecks.aggregatedList`
- `beta.compute.healthChecks.delete`
- `beta.compute.healthChecks.get`
- `beta.compute.healthChecks.insert`
- `beta.compute.healthChecks.list`
- `beta.compute.healthChecks.patch`
- `beta.compute.healthChecks.testIamPermissions`
- `beta.compute.healthChecks.update`
- `beta.compute.httpHealthChecks.delete`
- `beta.compute.httpHealthChecks.get`
- `beta.compute.httpHealthChecks.insert`
- `beta.compute.httpHealthChecks.list`
- `beta.compute.httpHealthChecks.testIamPermissions`
- `beta.compute.httpHealthChecks.update`
- `beta.compute.httpsHealthChecks.delete`
- `beta.compute.httpsHealthChecks.get`
- `beta.compute.httpsHealthChecks.insert`
- `beta.compute.httpsHealthChecks.list`
- `beta.compute.httpsHealthChecks.testIamPermissions`
- `beta.compute.httpsHealthChecks.update`
- `beta.compute.imageFamilyViews.get`
- `beta.compute.images.delete`
- `beta.compute.images.deprecate`
- `beta.compute.images.get`
- `beta.compute.images.getFromFamily`
- `beta.compute.images.getIamPolicy`
- `beta.compute.images.insert`
- `beta.compute.images.list`
- `beta.compute.images.patch`
- `beta.compute.images.setIamPolicy`
- `beta.compute.images.setLabels`
- `beta.compute.images.testIamPermissions`
- `beta.compute.instanceGroupManagers.abandonInstances`
- `beta.compute.instanceGroupManagers.aggregatedList`
- `beta.compute.instanceGroupManagers.applyUpdatesToInstances`
- `beta.compute.instanceGroupManagers.createInstances`
- `beta.compute.instanceGroupManagers.delete`
- `beta.compute.instanceGroupManagers.deleteInstances`
- `beta.compute.instanceGroupManagers.deletePerInstanceConfigs`
- `beta.compute.instanceGroupManagers.get`
- `beta.compute.instanceGroupManagers.insert`
- `beta.compute.instanceGroupManagers.list`
- `beta.compute.instanceGroupManagers.listErrors`
- `beta.compute.instanceGroupManagers.listManagedInstances`
- `beta.compute.instanceGroupManagers.listPerInstanceConfigs`
- `beta.compute.instanceGroupManagers.patch`
- `beta.compute.instanceGroupManagers.patchPerInstanceConfigs`
- `beta.compute.instanceGroupManagers.recreateInstances`
- `beta.compute.instanceGroupManagers.resize`
- `beta.compute.instanceGroupManagers.resizeAdvanced`
- `beta.compute.instanceGroupManagers.setAutoHealingPolicies`
- `beta.compute.instanceGroupManagers.setInstanceTemplate`
- `beta.compute.instanceGroupManagers.setTargetPools`
- `beta.compute.instanceGroupManagers.testIamPermissions`
- `beta.compute.instanceGroupManagers.update`
- `beta.compute.instanceGroupManagers.updatePerInstanceConfigs`
- `beta.compute.instanceGroups.addInstances`
- `beta.compute.instanceGroups.aggregatedList`
- `beta.compute.instanceGroups.delete`
- `beta.compute.instanceGroups.get`
- `beta.compute.instanceGroups.insert`
- `beta.compute.instanceGroups.list`
- `beta.compute.instanceGroups.listInstances`
- `beta.compute.instanceGroups.removeInstances`
- `beta.compute.instanceGroups.setNamedPorts`
- `beta.compute.instanceGroups.testIamPermissions`
- `beta.compute.instanceTemplates.delete`
- `beta.compute.instanceTemplates.get`
- `beta.compute.instanceTemplates.getIamPolicy`
- `beta.compute.instanceTemplates.insert`
- `beta.compute.instanceTemplates.list`
- `beta.compute.instanceTemplates.setIamPolicy`
- `beta.compute.instanceTemplates.testIamPermissions`
- `beta.compute.instances.addAccessConfig`
- `beta.compute.instances.addResourcePolicies`
- `beta.compute.instances.aggregatedList`
- `beta.compute.instances.attachDisk`
- `beta.compute.instances.bulkInsert`
- `beta.compute.instances.delete`
- `beta.compute.instances.deleteAccessConfig`
- `beta.compute.instances.detachDisk`
- `beta.compute.instances.get`
- `beta.compute.instances.getEffectiveFirewalls`
- `beta.compute.instances.getGuestAttributes`
- `beta.compute.instances.getIamPolicy`
- `beta.compute.instances.getScreenshot`
- `beta.compute.instances.getSerialPortOutput`
- `beta.compute.instances.getShieldedInstanceIdentity`
- `beta.compute.instances.getShieldedVmIdentity`
- `beta.compute.instances.insert`
- `beta.compute.instances.list`
- `beta.compute.instances.listReferrers`
- `beta.compute.instances.removeResourcePolicies`
- `beta.compute.instances.reset`
- `beta.compute.instances.resume`
- `beta.compute.instances.setDeletionProtection`
- `beta.compute.instances.setDiskAutoDelete`
- `beta.compute.instances.setIamPolicy`
- `beta.compute.instances.setLabels`
- `beta.compute.instances.setMachineResources`
- `beta.compute.instances.setMachineType`
- `beta.compute.instances.setMetadata`
- `beta.compute.instances.setMinCpuPlatform`
- `beta.compute.instances.setName`
- `beta.compute.instances.setScheduling`
- `beta.compute.instances.setServiceAccount`
- `beta.compute.instances.setShieldedInstanceIntegrityPolicy`
- `beta.compute.instances.setShieldedVmIntegrityPolicy`
- `beta.compute.instances.setTags`
- `beta.compute.instances.simulateMaintenanceEvent`
- `beta.compute.instances.start`
- `beta.compute.instances.startWithEncryptionKey`
- `beta.compute.instances.stop`
- `beta.compute.instances.suspend`
- `beta.compute.instances.testIamPermissions`
- `beta.compute.instances.update`
- `beta.compute.instances.updateAccessConfig`
- `beta.compute.instances.updateDisplayDevice`
- `beta.compute.instances.updateNetworkInterface`
- `beta.compute.instances.updateShieldedInstanceConfig`
- `beta.compute.instances.updateShieldedVmConfig`
- `beta.compute.interconnectAttachments.aggregatedList`
- `beta.compute.interconnectAttachments.delete`
- `beta.compute.interconnectAttachments.get`
- `beta.compute.interconnectAttachments.insert`
- `beta.compute.interconnectAttachments.list`
- `beta.compute.interconnectAttachments.patch`
- `beta.compute.interconnectAttachments.setLabels`
- `beta.compute.interconnectAttachments.testIamPermissions`
- `beta.compute.interconnectLocations.list`
- `beta.compute.interconnects.delete`
- `beta.compute.interconnects.get`
- `beta.compute.interconnects.getDiagnostics`
- `beta.compute.interconnects.insert`
- `beta.compute.interconnects.list`
- `beta.compute.interconnects.patch`
- `beta.compute.interconnects.setLabels`
- `beta.compute.interconnects.testIamPermissions`
- `beta.compute.licenseCodes.testIamPermissions`
- `beta.compute.licenses.delete`
- `beta.compute.licenses.get`
- `beta.compute.licenses.getIamPolicy`
- `beta.compute.licenses.insert`
- `beta.compute.licenses.list`
- `beta.compute.licenses.setIamPolicy`
- `beta.compute.licenses.testIamPermissions`
- `beta.compute.machineImages.delete`
- `beta.compute.machineImages.get`
- `beta.compute.machineImages.getIamPolicy`
- `beta.compute.machineImages.insert`
- `beta.compute.machineImages.list`
- `beta.compute.machineImages.setIamPolicy`
- `beta.compute.machineImages.testIamPermissions`
- `beta.compute.machineTypes.aggregatedList`
- `beta.compute.machineTypes.get`
- `beta.compute.machineTypes.list`
- `beta.compute.networkEdgeSecurityServices.aggregatedList`
- `beta.compute.networkEndpointGroups.aggregatedList`
- `beta.compute.networkEndpointGroups.attachNetworkEndpoints`
- `beta.compute.networkEndpointGroups.delete`
- `beta.compute.networkEndpointGroups.detachNetworkEndpoints`
- `beta.compute.networkEndpointGroups.get`
- `beta.compute.networkEndpointGroups.insert`
- `beta.compute.networkEndpointGroups.list`
- `beta.compute.networkEndpointGroups.listNetworkEndpoints`
- `beta.compute.networkEndpointGroups.testIamPermissions`
- `beta.compute.networkFirewallPolicies.addAssociation`
- `beta.compute.networkFirewallPolicies.addRule`
- `beta.compute.networkFirewallPolicies.delete`
- `beta.compute.networkFirewallPolicies.getIamPolicy`
- `beta.compute.networkFirewallPolicies.insert`
- `beta.compute.networkFirewallPolicies.list`
- `beta.compute.networkFirewallPolicies.patch`
- `beta.compute.networkFirewallPolicies.patchRule`
- `beta.compute.networkFirewallPolicies.removeAssociation`
- `beta.compute.networkFirewallPolicies.removeRule`
- `beta.compute.networkFirewallPolicies.setIamPolicy`
- `beta.compute.networkFirewallPolicies.testIamPermissions`
- `beta.compute.networks.addPeering`
- `beta.compute.networks.delete`
- `beta.compute.networks.get`
- `beta.compute.networks.getEffectiveFirewalls`
- `beta.compute.networks.insert`
- `beta.compute.networks.list`
- `beta.compute.networks.patch`
- `beta.compute.networks.removePeering`
- `beta.compute.networks.switchToCustomMode`
- `beta.compute.networks.testIamPermissions`
- `beta.compute.networks.updatePeering`
- `beta.compute.nodeGroups.aggregatedList`
- `beta.compute.nodeGroups.delete`
- `beta.compute.nodeGroups.deleteNodes`
- `beta.compute.nodeGroups.get`
- `beta.compute.nodeGroups.getIamPolicy`
- `beta.compute.nodeGroups.insert`
- `beta.compute.nodeGroups.list`
- `beta.compute.nodeGroups.listNodes`
- `beta.compute.nodeGroups.patch`
- `beta.compute.nodeGroups.setIamPolicy`
- `beta.compute.nodeGroups.setNodeTemplate`
- `beta.compute.nodeGroups.testIamPermissions`
- `beta.compute.nodeTemplates.aggregatedList`
- `beta.compute.nodeTemplates.delete`
- `beta.compute.nodeTemplates.get`
- `beta.compute.nodeTemplates.getIamPolicy`
- `beta.compute.nodeTemplates.insert`
- `beta.compute.nodeTemplates.list`
- `beta.compute.nodeTemplates.setIamPolicy`
- `beta.compute.nodeTemplates.testIamPermissions`
- `beta.compute.nodeTypes.aggregatedList`
- `beta.compute.nodeTypes.get`
- `beta.compute.nodeTypes.list`
- `beta.compute.organizationSecurityPolicies.addAssociation`
- `beta.compute.organizationSecurityPolicies.addRule`
- `beta.compute.organizationSecurityPolicies.copyRules`
- `beta.compute.organizationSecurityPolicies.delete`
- `beta.compute.organizationSecurityPolicies.get`
- `beta.compute.organizationSecurityPolicies.getAssociation`
- `beta.compute.organizationSecurityPolicies.getRule`
- `beta.compute.organizationSecurityPolicies.insert`
- `beta.compute.organizationSecurityPolicies.listAssociations`
- `beta.compute.organizationSecurityPolicies.patch`
- `beta.compute.organizationSecurityPolicies.patchRule`
- `beta.compute.organizationSecurityPolicies.removeAssociation`
- `beta.compute.organizationSecurityPolicies.removeRule`
- `beta.compute.packetMirrorings.aggregatedList`
- `beta.compute.packetMirrorings.delete`
- `beta.compute.packetMirrorings.get`
- `beta.compute.packetMirrorings.insert`
- `beta.compute.packetMirrorings.list`
- `beta.compute.packetMirrorings.patch`
- `beta.compute.packetMirrorings.testIamPermissions`
- `beta.compute.projects.disableXpnHost`
- `beta.compute.projects.disableXpnResource`
- `beta.compute.projects.enableXpnHost`
- `beta.compute.projects.enableXpnResource`
- `beta.compute.projects.get`
- `beta.compute.projects.getXpnHost`
- `beta.compute.projects.getXpnResources`
- `beta.compute.projects.listXpnHosts`
- `beta.compute.projects.setCommonInstanceMetadata`
- `beta.compute.projects.setDefaultNetworkTier`
- `beta.compute.projects.setUsageExportBucket`
- `beta.compute.publicAdvertisedPrefixes.get`
- `beta.compute.publicAdvertisedPrefixes.insert`
- `beta.compute.publicAdvertisedPrefixes.list`
- `beta.compute.publicDelegatedPrefixes.aggregatedList`
- `beta.compute.publicDelegatedPrefixes.get`
- `beta.compute.publicDelegatedPrefixes.list`
- `beta.compute.regionAutoscalers.delete`
- `beta.compute.regionAutoscalers.get`
- `beta.compute.regionAutoscalers.insert`
- `beta.compute.regionAutoscalers.list`
- `beta.compute.regionAutoscalers.patch`
- `beta.compute.regionAutoscalers.testIamPermissions`
- `beta.compute.regionAutoscalers.update`
- `beta.compute.regionBackendServices.delete`
- `beta.compute.regionBackendServices.get`
- `beta.compute.regionBackendServices.getHealth`
- `beta.compute.regionBackendServices.getIamPolicy`
- `beta.compute.regionBackendServices.insert`
- `beta.compute.regionBackendServices.list`
- `beta.compute.regionBackendServices.patch`
- `beta.compute.regionBackendServices.setIamPolicy`
- `beta.compute.regionBackendServices.testIamPermissions`
- `beta.compute.regionBackendServices.update`
- `beta.compute.regionCommitments.aggregatedList`
- `beta.compute.regionCommitments.get`
- `beta.compute.regionCommitments.insert`
- `beta.compute.regionCommitments.list`
- `beta.compute.regionCommitments.testIamPermissions`
- `beta.compute.regionCommitments.update`
- `beta.compute.regionCommitments.updateReservations`
- `beta.compute.regionDiskTypes.list`
- `beta.compute.regionDisks.addResourcePolicies`
- `beta.compute.regionDisks.createSnapshot`
- `beta.compute.regionDisks.delete`
- `beta.compute.regionDisks.get`
- `beta.compute.regionDisks.getIamPolicy`
- `beta.compute.regionDisks.insert`
- `beta.compute.regionDisks.list`
- `beta.compute.regionDisks.removeResourcePolicies`
- `beta.compute.regionDisks.resize`
- `beta.compute.regionDisks.setIamPolicy`
- `beta.compute.regionDisks.setLabels`
- `beta.compute.regionDisks.testIamPermissions`
- `beta.compute.regionDisks.update`
- `beta.compute.regionHealthCheckServices.delete`
- `beta.compute.regionHealthCheckServices.insert`
- `beta.compute.regionHealthCheckServices.list`
- `beta.compute.regionHealthCheckServices.patch`
- `beta.compute.regionHealthCheckServices.testIamPermissions`
- `beta.compute.regionHealthChecks.delete`
- `beta.compute.regionHealthChecks.get`
- `beta.compute.regionHealthChecks.insert`
- `beta.compute.regionHealthChecks.list`
- `beta.compute.regionHealthChecks.patch`
- `beta.compute.regionHealthChecks.testIamPermissions`
- `beta.compute.regionHealthChecks.update`
- `beta.compute.regionInstanceGroupManagers.abandonInstances`
- `beta.compute.regionInstanceGroupManagers.applyUpdatesToInstances`
- `beta.compute.regionInstanceGroupManagers.createInstances`
- `beta.compute.regionInstanceGroupManagers.delete`
- `beta.compute.regionInstanceGroupManagers.deleteInstances`
- `beta.compute.regionInstanceGroupManagers.deletePerInstanceConfigs`
- `beta.compute.regionInstanceGroupManagers.get`
- `beta.compute.regionInstanceGroupManagers.insert`
- `beta.compute.regionInstanceGroupManagers.list`
- `beta.compute.regionInstanceGroupManagers.listErrors`
- `beta.compute.regionInstanceGroupManagers.listManagedInstances`
- `beta.compute.regionInstanceGroupManagers.listPerInstanceConfigs`
- `beta.compute.regionInstanceGroupManagers.patch`
- `beta.compute.regionInstanceGroupManagers.patchPerInstanceConfigs`
- `beta.compute.regionInstanceGroupManagers.recreateInstances`
- `beta.compute.regionInstanceGroupManagers.resize`
- `beta.compute.regionInstanceGroupManagers.resizeAdvanced`
- `beta.compute.regionInstanceGroupManagers.setAutoHealingPolicies`
- `beta.compute.regionInstanceGroupManagers.setInstanceTemplate`
- `beta.compute.regionInstanceGroupManagers.setTargetPools`
- `beta.compute.regionInstanceGroupManagers.testIamPermissions`
- `beta.compute.regionInstanceGroupManagers.update`
- `beta.compute.regionInstanceGroupManagers.updatePerInstanceConfigs`
- `beta.compute.regionInstanceGroups.get`
- `beta.compute.regionInstanceGroups.list`
- `beta.compute.regionInstanceGroups.listInstances`
- `beta.compute.regionInstanceGroups.setNamedPorts`
- `beta.compute.regionInstanceGroups.testIamPermissions`
- `beta.compute.regionInstances.bulkInsert`
- `beta.compute.regionInstances.recommendLocations`
- `beta.compute.regionNetworkEndpointGroups.delete`
- `beta.compute.regionNetworkEndpointGroups.get`
- `beta.compute.regionNetworkEndpointGroups.insert`
- `beta.compute.regionNetworkEndpointGroups.list`
- `beta.compute.regionNetworkFirewallPolicies.addAssociation`
- `beta.compute.regionNetworkFirewallPolicies.addRule`
- `beta.compute.regionNetworkFirewallPolicies.delete`
- `beta.compute.regionNetworkFirewallPolicies.getIamPolicy`
- `beta.compute.regionNetworkFirewallPolicies.insert`
- `beta.compute.regionNetworkFirewallPolicies.list`
- `beta.compute.regionNetworkFirewallPolicies.patch`
- `beta.compute.regionNetworkFirewallPolicies.patchRule`
- `beta.compute.regionNetworkFirewallPolicies.removeAssociation`
- `beta.compute.regionNetworkFirewallPolicies.removeRule`
- `beta.compute.regionNetworkFirewallPolicies.setIamPolicy`
- `beta.compute.regionNetworkFirewallPolicies.testIamPermissions`
- `beta.compute.regionNotificationEndpoints.delete`
- `beta.compute.regionNotificationEndpoints.insert`
- `beta.compute.regionNotificationEndpoints.list`
- `beta.compute.regionNotificationEndpoints.testIamPermissions`
- `beta.compute.regionOperations.delete`
- `beta.compute.regionOperations.get`
- `beta.compute.regionOperations.list`
- `beta.compute.regionOperations.wait`
- `beta.compute.regionSecurityPolicies.list`
- `beta.compute.regionSslCertificates.delete`
- `beta.compute.regionSslCertificates.get`
- `beta.compute.regionSslCertificates.insert`
- `beta.compute.regionSslCertificates.list`
- `beta.compute.regionSslCertificates.testIamPermissions`
- `beta.compute.regionTargetHttpProxies.delete`
- `beta.compute.regionTargetHttpProxies.get`
- `beta.compute.regionTargetHttpProxies.insert`
- `beta.compute.regionTargetHttpProxies.list`
- `beta.compute.regionTargetHttpProxies.setUrlMap`
- `beta.compute.regionTargetHttpProxies.testIamPermissions`
- `beta.compute.regionTargetHttpsProxies.delete`
- `beta.compute.regionTargetHttpsProxies.get`
- `beta.compute.regionTargetHttpsProxies.insert`
- `beta.compute.regionTargetHttpsProxies.list`
- `beta.compute.regionTargetHttpsProxies.setSslCertificates`
- `beta.compute.regionTargetHttpsProxies.setUrlMap`
- `beta.compute.regionTargetHttpsProxies.testIamPermissions`
- `beta.compute.regionUrlMaps.delete`
- `beta.compute.regionUrlMaps.get`
- `beta.compute.regionUrlMaps.insert`
- `beta.compute.regionUrlMaps.list`
- `beta.compute.regionUrlMaps.patch`
- `beta.compute.regionUrlMaps.testIamPermissions`
- `beta.compute.regionUrlMaps.update`
- `beta.compute.regions.get`
- `beta.compute.regions.list`
- `beta.compute.reservations.aggregatedList`
- `beta.compute.reservations.delete`
- `beta.compute.reservations.get`
- `beta.compute.reservations.getIamPolicy`
- `beta.compute.reservations.insert`
- `beta.compute.reservations.list`
- `beta.compute.reservations.resize`
- `beta.compute.reservations.setIamPolicy`
- `beta.compute.reservations.testIamPermissions`
- `beta.compute.reservations.update`
- `beta.compute.resourcePolicies.aggregatedList`
- `beta.compute.resourcePolicies.delete`
- `beta.compute.resourcePolicies.get`
- `beta.compute.resourcePolicies.getIamPolicy`
- `beta.compute.resourcePolicies.insert`
- `beta.compute.resourcePolicies.list`
- `beta.compute.resourcePolicies.setIamPolicy`
- `beta.compute.resourcePolicies.testIamPermissions`
- `beta.compute.routers.aggregatedList`
- `beta.compute.routers.delete`
- `beta.compute.routers.get`
- `beta.compute.routers.getNatMappingInfo`
- `beta.compute.routers.getRouterStatus`
- `beta.compute.routers.insert`
- `beta.compute.routers.list`
- `beta.compute.routers.patch`
- `beta.compute.routers.preview`
- `beta.compute.routers.testIamPermissions`
- `beta.compute.routers.update`
- `beta.compute.routes.delete`
- `beta.compute.routes.get`
- `beta.compute.routes.insert`
- `beta.compute.routes.list`
- `beta.compute.routes.testIamPermissions`
- `beta.compute.securityPolicies.addRule`
- `beta.compute.securityPolicies.aggregatedList`
- `beta.compute.securityPolicies.delete`
- `beta.compute.securityPolicies.get`
- `beta.compute.securityPolicies.getRule`
- `beta.compute.securityPolicies.insert`
- `beta.compute.securityPolicies.list`
- `beta.compute.securityPolicies.listPreconfiguredExpressionSets`
- `beta.compute.securityPolicies.patch`
- `beta.compute.securityPolicies.patchRule`
- `beta.compute.securityPolicies.removeRule`
- `beta.compute.securityPolicies.setLabels`
- `beta.compute.securityPolicies.testIamPermissions`
- `beta.compute.serviceAttachments.aggregatedList`
- `beta.compute.serviceAttachments.delete`
- `beta.compute.serviceAttachments.get`
- `beta.compute.serviceAttachments.insert`
- `beta.compute.serviceAttachments.list`
- `beta.compute.serviceAttachments.patch`
- `beta.compute.serviceAttachments.testIamPermissions`
- `beta.compute.snapshots.delete`
- `beta.compute.snapshots.get`
- `beta.compute.snapshots.getIamPolicy`
- `beta.compute.snapshots.insert`
- `beta.compute.snapshots.list`
- `beta.compute.snapshots.setIamPolicy`
- `beta.compute.snapshots.setLabels`
- `beta.compute.snapshots.testIamPermissions`
- `beta.compute.sslCertificates.aggregatedList`
- `beta.compute.sslCertificates.delete`
- `beta.compute.sslCertificates.get`
- `beta.compute.sslCertificates.insert`
- `beta.compute.sslCertificates.list`
- `beta.compute.sslCertificates.testIamPermissions`
- `beta.compute.sslPolicies.delete`
- `beta.compute.sslPolicies.get`
- `beta.compute.sslPolicies.insert`
- `beta.compute.sslPolicies.list`
- `beta.compute.sslPolicies.patch`
- `beta.compute.sslPolicies.testIamPermissions`
- `beta.compute.subnetworks.aggregatedList`
- `beta.compute.subnetworks.delete`
- `beta.compute.subnetworks.expandIpCidrRange`
- `beta.compute.subnetworks.get`
- `beta.compute.subnetworks.getIamPolicy`
- `beta.compute.subnetworks.insert`
- `beta.compute.subnetworks.list`
- `beta.compute.subnetworks.patch`
- `beta.compute.subnetworks.setIamPolicy`
- `beta.compute.subnetworks.setPrivateIpGoogleAccess`
- `beta.compute.subnetworks.testIamPermissions`
- `beta.compute.targetGrpcProxies.insert`
- `beta.compute.targetHttpProxies.aggregatedList`
- `beta.compute.targetHttpProxies.delete`
- `beta.compute.targetHttpProxies.get`
- `beta.compute.targetHttpProxies.insert`
- `beta.compute.targetHttpProxies.list`
- `beta.compute.targetHttpProxies.patch`
- `beta.compute.targetHttpProxies.setUrlMap`
- `beta.compute.targetHttpProxies.testIamPermissions`
- `beta.compute.targetHttpsProxies.aggregatedList`
- `beta.compute.targetHttpsProxies.delete`
- `beta.compute.targetHttpsProxies.get`
- `beta.compute.targetHttpsProxies.insert`
- `beta.compute.targetHttpsProxies.list`
- `beta.compute.targetHttpsProxies.patch`
- `beta.compute.targetHttpsProxies.setCertificateMap`
- `beta.compute.targetHttpsProxies.setQuicOverride`
- `beta.compute.targetHttpsProxies.setSslCertificates`
- `beta.compute.targetHttpsProxies.setSslPolicy`
- `beta.compute.targetHttpsProxies.setUrlMap`
- `beta.compute.targetHttpsProxies.testIamPermissions`
- `beta.compute.targetInstances.aggregatedList`
- `beta.compute.targetInstances.delete`
- `beta.compute.targetInstances.get`
- `beta.compute.targetInstances.insert`
- `beta.compute.targetInstances.list`
- `beta.compute.targetInstances.testIamPermissions`
- `beta.compute.targetPools.addHealthCheck`
- `beta.compute.targetPools.addInstance`
- `beta.compute.targetPools.aggregatedList`
- `beta.compute.targetPools.delete`
- `beta.compute.targetPools.get`
- `beta.compute.targetPools.getHealth`
- `beta.compute.targetPools.insert`
- `beta.compute.targetPools.list`
- `beta.compute.targetPools.removeHealthCheck`
- `beta.compute.targetPools.removeInstance`
- `beta.compute.targetPools.testIamPermissions`
- `beta.compute.targetSslProxies.delete`
- `beta.compute.targetSslProxies.get`
- `beta.compute.targetSslProxies.insert`
- `beta.compute.targetSslProxies.list`
- `beta.compute.targetSslProxies.setBackendService`
- `beta.compute.targetSslProxies.setProxyHeader`
- `beta.compute.targetSslProxies.setSslCertificates`
- `beta.compute.targetSslProxies.setSslPolicy`
- `beta.compute.targetSslProxies.testIamPermissions`
- `beta.compute.targetTcpProxies.delete`
- `beta.compute.targetTcpProxies.get`
- `beta.compute.targetTcpProxies.insert`
- `beta.compute.targetTcpProxies.list`
- `beta.compute.targetTcpProxies.setBackendService`
- `beta.compute.targetTcpProxies.setProxyHeader`
- `beta.compute.targetTcpProxies.testIamPermissions`
- `beta.compute.targetVpnGateways.aggregatedList`
- `beta.compute.targetVpnGateways.delete`
- `beta.compute.targetVpnGateways.get`
- `beta.compute.targetVpnGateways.insert`
- `beta.compute.targetVpnGateways.list`
- `beta.compute.targetVpnGateways.setLabels`
- `beta.compute.targetVpnGateways.testIamPermissions`
- `beta.compute.urlMaps.aggregatedList`
- `beta.compute.urlMaps.delete`
- `beta.compute.urlMaps.get`
- `beta.compute.urlMaps.insert`
- `beta.compute.urlMaps.invalidateCache`
- `beta.compute.urlMaps.list`
- `beta.compute.urlMaps.patch`
- `beta.compute.urlMaps.testIamPermissions`
- `beta.compute.urlMaps.update`
- `beta.compute.vpnGateways.aggregatedList`
- `beta.compute.vpnGateways.delete`
- `beta.compute.vpnGateways.insert`
- `beta.compute.vpnGateways.list`
- `beta.compute.vpnGateways.setLabels`
- `beta.compute.vpnGateways.testIamPermissions`
- `beta.compute.vpnTunnels.aggregatedList`
- `beta.compute.vpnTunnels.delete`
- `beta.compute.vpnTunnels.get`
- `beta.compute.vpnTunnels.insert`
- `beta.compute.vpnTunnels.list`
- `beta.compute.vpnTunnels.setLabels`
- `beta.compute.vpnTunnels.testIamPermissions`
- `beta.compute.zoneOperations.delete`
- `beta.compute.zoneOperations.get`
- `beta.compute.zoneOperations.list`
- `beta.compute.zoneOperations.wait`
- `beta.compute.zones.get`
- `beta.compute.zones.list`
- `compute.disks.get`
- `compute.globalAddresses.move`
- `compute.images.insert`
- `compute.instanceTemplates.get`
- `compute.instances.get`
- `compute.instances.insert`
- `compute.instances.setMetadata`
- `compute.instances.setSecondaryServiceAccount`
- `compute.regionDisks.get`
- `compute.routers.delete`
- `compute.routers.insert`
- `compute.subnetworks.delete`
- `compute.subnetworks.insert`
- `compute.zoneInstanceTemplates.insert`
- `compute.zoneOperations.get`
- `v1.compute.acceleratorTypes.aggregatedList`
- `v1.compute.acceleratorTypes.get`
- `v1.compute.acceleratorTypes.list`
- `v1.compute.addresses.aggregatedList`
- `v1.compute.addresses.delete`
- `v1.compute.addresses.get`
- `v1.compute.addresses.insert`
- `v1.compute.addresses.list`
- `v1.compute.autoscalers.aggregatedList`
- `v1.compute.autoscalers.delete`
- `v1.compute.autoscalers.get`
- `v1.compute.autoscalers.insert`
- `v1.compute.autoscalers.list`
- `v1.compute.autoscalers.patch`
- `v1.compute.autoscalers.update`
- `v1.compute.backendBuckets.addSignedUrlKey`
- `v1.compute.backendBuckets.delete`
- `v1.compute.backendBuckets.deleteSignedUrlKey`
- `v1.compute.backendBuckets.get`
- `v1.compute.backendBuckets.insert`
- `v1.compute.backendBuckets.list`
- `v1.compute.backendBuckets.patch`
- `v1.compute.backendBuckets.setEdgeSecurityPolicy`
- `v1.compute.backendBuckets.update`
- `v1.compute.backendServices.addSignedUrlKey`
- `v1.compute.backendServices.aggregatedList`
- `v1.compute.backendServices.delete`
- `v1.compute.backendServices.deleteSignedUrlKey`
- `v1.compute.backendServices.get`
- `v1.compute.backendServices.getHealth`
- `v1.compute.backendServices.insert`
- `v1.compute.backendServices.list`
- `v1.compute.backendServices.patch`
- `v1.compute.backendServices.setEdgeSecurityPolicy`
- `v1.compute.backendServices.setSecurityPolicy`
- `v1.compute.backendServices.update`
- `v1.compute.diskTypes.aggregatedList`
- `v1.compute.diskTypes.get`
- `v1.compute.diskTypes.list`
- `v1.compute.disks.addResourcePolicies`
- `v1.compute.disks.aggregatedList`
- `v1.compute.disks.createSnapshot`
- `v1.compute.disks.delete`
- `v1.compute.disks.get`
- `v1.compute.disks.getIamPolicy`
- `v1.compute.disks.insert`
- `v1.compute.disks.list`
- `v1.compute.disks.removeResourcePolicies`
- `v1.compute.disks.resize`
- `v1.compute.disks.setIamPolicy`
- `v1.compute.disks.setLabels`
- `v1.compute.disks.testIamPermissions`
- `v1.compute.externalVpnGateways.delete`
- `v1.compute.externalVpnGateways.get`
- `v1.compute.externalVpnGateways.insert`
- `v1.compute.externalVpnGateways.list`
- `v1.compute.externalVpnGateways.setLabels`
- `v1.compute.externalVpnGateways.testIamPermissions`
- `v1.compute.firewallPolicies.addAssociation`
- `v1.compute.firewallPolicies.addRule`
- `v1.compute.firewallPolicies.delete`
- `v1.compute.firewallPolicies.get`
- `v1.compute.firewallPolicies.getAssociation`
- `v1.compute.firewallPolicies.getRule`
- `v1.compute.firewallPolicies.insert`
- `v1.compute.firewallPolicies.list`
- `v1.compute.firewallPolicies.listAssociations`
- `v1.compute.firewallPolicies.patch`
- `v1.compute.firewallPolicies.patchRule`
- `v1.compute.firewallPolicies.removeAssociation`
- `v1.compute.firewallPolicies.removeRule`
- `v1.compute.firewalls.delete`
- `v1.compute.firewalls.get`
- `v1.compute.firewalls.insert`
- `v1.compute.firewalls.list`
- `v1.compute.firewalls.patch`
- `v1.compute.firewalls.update`
- `v1.compute.forwardingRules.aggregatedList`
- `v1.compute.forwardingRules.delete`
- `v1.compute.forwardingRules.get`
- `v1.compute.forwardingRules.insert`
- `v1.compute.forwardingRules.list`
- `v1.compute.forwardingRules.patch`
- `v1.compute.forwardingRules.setLabels`
- `v1.compute.forwardingRules.setTarget`
- `v1.compute.globalAddresses.delete`
- `v1.compute.globalAddresses.get`
- `v1.compute.globalAddresses.insert`
- `v1.compute.globalAddresses.list`
- `v1.compute.globalForwardingRules.delete`
- `v1.compute.globalForwardingRules.get`
- `v1.compute.globalForwardingRules.insert`
- `v1.compute.globalForwardingRules.list`
- `v1.compute.globalForwardingRules.patch`
- `v1.compute.globalForwardingRules.setLabels`
- `v1.compute.globalForwardingRules.setTarget`
- `v1.compute.globalNetworkEndpointGroups.attachNetworkEndpoints`
- `v1.compute.globalNetworkEndpointGroups.delete`
- `v1.compute.globalNetworkEndpointGroups.detachNetworkEndpoints`
- `v1.compute.globalNetworkEndpointGroups.get`
- `v1.compute.globalNetworkEndpointGroups.insert`
- `v1.compute.globalNetworkEndpointGroups.list`
- `v1.compute.globalNetworkEndpointGroups.listNetworkEndpoints`
- `v1.compute.globalOperations.aggregatedList`
- `v1.compute.globalOperations.delete`
- `v1.compute.globalOperations.get`
- `v1.compute.globalOperations.list`
- `v1.compute.globalOperations.wait`
- `v1.compute.globalOrganizationOperations.get`
- `v1.compute.globalPublicDelegatedPrefixes.delete`
- `v1.compute.globalPublicDelegatedPrefixes.insert`
- `v1.compute.globalPublicDelegatedPrefixes.list`
- `v1.compute.globalPublicDelegatedPrefixes.patch`
- `v1.compute.healthChecks.aggregatedList`
- `v1.compute.healthChecks.delete`
- `v1.compute.healthChecks.get`
- `v1.compute.healthChecks.insert`
- `v1.compute.healthChecks.list`
- `v1.compute.healthChecks.patch`
- `v1.compute.healthChecks.update`
- `v1.compute.httpHealthChecks.delete`
- `v1.compute.httpHealthChecks.get`
- `v1.compute.httpHealthChecks.insert`
- `v1.compute.httpHealthChecks.list`
- `v1.compute.httpHealthChecks.patch`
- `v1.compute.httpHealthChecks.update`
- `v1.compute.httpsHealthChecks.delete`
- `v1.compute.httpsHealthChecks.get`
- `v1.compute.httpsHealthChecks.insert`
- `v1.compute.httpsHealthChecks.list`
- `v1.compute.httpsHealthChecks.patch`
- `v1.compute.httpsHealthChecks.update`
- `v1.compute.images.delete`
- `v1.compute.images.deprecate`
- `v1.compute.images.get`
- `v1.compute.images.getFromFamily`
- `v1.compute.images.getIamPolicy`
- `v1.compute.images.insert`
- `v1.compute.images.list`
- `v1.compute.images.patch`
- `v1.compute.images.setIamPolicy`
- `v1.compute.images.setLabels`
- `v1.compute.images.testIamPermissions`
- `v1.compute.instanceGroupManagers.abandonInstances`
- `v1.compute.instanceGroupManagers.aggregatedList`
- `v1.compute.instanceGroupManagers.applyUpdatesToInstances`
- `v1.compute.instanceGroupManagers.createInstances`
- `v1.compute.instanceGroupManagers.delete`
- `v1.compute.instanceGroupManagers.deleteInstances`
- `v1.compute.instanceGroupManagers.deletePerInstanceConfigs`
- `v1.compute.instanceGroupManagers.get`
- `v1.compute.instanceGroupManagers.insert`
- `v1.compute.instanceGroupManagers.list`
- `v1.compute.instanceGroupManagers.listErrors`
- `v1.compute.instanceGroupManagers.listManagedInstances`
- `v1.compute.instanceGroupManagers.listPerInstanceConfigs`
- `v1.compute.instanceGroupManagers.patch`
- `v1.compute.instanceGroupManagers.patchPerInstanceConfigs`
- `v1.compute.instanceGroupManagers.recreateInstances`
- `v1.compute.instanceGroupManagers.resize`
- `v1.compute.instanceGroupManagers.setInstanceTemplate`
- `v1.compute.instanceGroupManagers.setTargetPools`
- `v1.compute.instanceGroupManagers.updatePerInstanceConfigs`
- `v1.compute.instanceGroups.addInstances`
- `v1.compute.instanceGroups.aggregatedList`
- `v1.compute.instanceGroups.delete`
- `v1.compute.instanceGroups.get`
- `v1.compute.instanceGroups.insert`
- `v1.compute.instanceGroups.list`
- `v1.compute.instanceGroups.listInstances`
- `v1.compute.instanceGroups.removeInstances`
- `v1.compute.instanceGroups.setNamedPorts`
- `v1.compute.instanceTemplates.delete`
- `v1.compute.instanceTemplates.get`
- `v1.compute.instanceTemplates.getIamPolicy`
- `v1.compute.instanceTemplates.insert`
- `v1.compute.instanceTemplates.list`
- `v1.compute.instanceTemplates.setIamPolicy`
- `v1.compute.instanceTemplates.testIamPermissions`
- `v1.compute.instances.addAccessConfig`
- `v1.compute.instances.addResourcePolicies`
- `v1.compute.instances.aggregatedList`
- `v1.compute.instances.attachDisk`
- `v1.compute.instances.bulkInsert`
- `v1.compute.instances.delete`
- `v1.compute.instances.deleteAccessConfig`
- `v1.compute.instances.detachDisk`
- `v1.compute.instances.get`
- `v1.compute.instances.getEffectiveFirewalls`
- `v1.compute.instances.getGuestAttributes`
- `v1.compute.instances.getIamPolicy`
- `v1.compute.instances.getScreenshot`
- `v1.compute.instances.getSerialPortOutput`
- `v1.compute.instances.getShieldedInstanceIdentity`
- `v1.compute.instances.insert`
- `v1.compute.instances.list`
- `v1.compute.instances.listReferrers`
- `v1.compute.instances.removeResourcePolicies`
- `v1.compute.instances.reset`
- `v1.compute.instances.resume`
- `v1.compute.instances.setDeletionProtection`
- `v1.compute.instances.setDiskAutoDelete`
- `v1.compute.instances.setIamPolicy`
- `v1.compute.instances.setLabels`
- `v1.compute.instances.setMachineResources`
- `v1.compute.instances.setMachineType`
- `v1.compute.instances.setMetadata`
- `v1.compute.instances.setMinCpuPlatform`
- `v1.compute.instances.setScheduling`
- `v1.compute.instances.setServiceAccount`
- `v1.compute.instances.setShieldedInstanceIntegrityPolicy`
- `v1.compute.instances.setTags`
- `v1.compute.instances.simulateMaintenanceEvent`
- `v1.compute.instances.start`
- `v1.compute.instances.startWithEncryptionKey`
- `v1.compute.instances.stop`
- `v1.compute.instances.suspend`
- `v1.compute.instances.testIamPermissions`
- `v1.compute.instances.update`
- `v1.compute.instances.updateAccessConfig`
- `v1.compute.instances.updateDisplayDevice`
- `v1.compute.instances.updateNetworkInterface`
- `v1.compute.instances.updateShieldedInstanceConfig`
- `v1.compute.instancesInternal.delete`
- `v1.compute.instancesInternal.get`
- `v1.compute.instancesInternal.insert`
- `v1.compute.instancesInternal.setDiskAutoDelete`
- `v1.compute.instancesInternal.stop`
- `v1.compute.instancesInternal.suspend`
- `v1.compute.instancesInternal.update`
- `v1.compute.interconnectAttachments.aggregatedList`
- `v1.compute.interconnectAttachments.delete`
- `v1.compute.interconnectAttachments.get`
- `v1.compute.interconnectAttachments.insert`
- `v1.compute.interconnectAttachments.list`
- `v1.compute.interconnectAttachments.patch`
- `v1.compute.interconnectLocations.get`
- `v1.compute.interconnectLocations.list`
- `v1.compute.interconnects.delete`
- `v1.compute.interconnects.get`
- `v1.compute.interconnects.getDiagnostics`
- `v1.compute.interconnects.insert`
- `v1.compute.interconnects.list`
- `v1.compute.interconnects.patch`
- `v1.compute.licenseCodes.get`
- `v1.compute.licenseCodes.testIamPermissions`
- `v1.compute.licenses.delete`
- `v1.compute.licenses.get`
- `v1.compute.licenses.getIamPolicy`
- `v1.compute.licenses.insert`
- `v1.compute.licenses.list`
- `v1.compute.licenses.setIamPolicy`
- `v1.compute.licenses.testIamPermissions`
- `v1.compute.machineImages.delete`
- `v1.compute.machineImages.get`
- `v1.compute.machineImages.getIamPolicy`
- `v1.compute.machineImages.insert`
- `v1.compute.machineImages.list`
- `v1.compute.machineImages.setIamPolicy`
- `v1.compute.machineImages.testIamPermissions`
- `v1.compute.machineTypes.aggregatedList`
- `v1.compute.machineTypes.get`
- `v1.compute.machineTypes.list`
- `v1.compute.networkEdgeSecurityServices.aggregatedList`
- `v1.compute.networkEndpointGroups.aggregatedList`
- `v1.compute.networkEndpointGroups.attachNetworkEndpoints`
- `v1.compute.networkEndpointGroups.delete`
- `v1.compute.networkEndpointGroups.detachNetworkEndpoints`
- `v1.compute.networkEndpointGroups.get`
- `v1.compute.networkEndpointGroups.insert`
- `v1.compute.networkEndpointGroups.list`
- `v1.compute.networkEndpointGroups.listNetworkEndpoints`
- `v1.compute.networkEndpointGroups.testIamPermissions`
- `v1.compute.networkFirewallPolicies.addAssociation`
- `v1.compute.networkFirewallPolicies.addRule`
- `v1.compute.networkFirewallPolicies.delete`
- `v1.compute.networkFirewallPolicies.get`
- `v1.compute.networkFirewallPolicies.getIamPolicy`
- `v1.compute.networkFirewallPolicies.insert`
- `v1.compute.networkFirewallPolicies.list`
- `v1.compute.networkFirewallPolicies.patch`
- `v1.compute.networkFirewallPolicies.patchRule`
- `v1.compute.networkFirewallPolicies.removeAssociation`
- `v1.compute.networkFirewallPolicies.removeRule`
- `v1.compute.networkFirewallPolicies.setIamPolicy`
- `v1.compute.networkFirewallPolicies.testIamPermissions`
- `v1.compute.networks.addPeering`
- `v1.compute.networks.delete`
- `v1.compute.networks.get`
- `v1.compute.networks.getEffectiveFirewalls`
- `v1.compute.networks.insert`
- `v1.compute.networks.list`
- `v1.compute.networks.patch`
- `v1.compute.networks.removePeering`
- `v1.compute.networks.switchToCustomMode`
- `v1.compute.networks.updatePeering`
- `v1.compute.nodeGroups.addNodes`
- `v1.compute.nodeGroups.aggregatedList`
- `v1.compute.nodeGroups.delete`
- `v1.compute.nodeGroups.deleteNodes`
- `v1.compute.nodeGroups.get`
- `v1.compute.nodeGroups.getIamPolicy`
- `v1.compute.nodeGroups.insert`
- `v1.compute.nodeGroups.list`
- `v1.compute.nodeGroups.listNodes`
- `v1.compute.nodeGroups.patch`
- `v1.compute.nodeGroups.setIamPolicy`
- `v1.compute.nodeGroups.setNodeTemplate`
- `v1.compute.nodeGroups.testIamPermissions`
- `v1.compute.nodeTemplates.aggregatedList`
- `v1.compute.nodeTemplates.delete`
- `v1.compute.nodeTemplates.get`
- `v1.compute.nodeTemplates.getIamPolicy`
- `v1.compute.nodeTemplates.insert`
- `v1.compute.nodeTemplates.list`
- `v1.compute.nodeTemplates.setIamPolicy`
- `v1.compute.nodeTemplates.testIamPermissions`
- `v1.compute.nodeTypes.aggregatedList`
- `v1.compute.nodeTypes.get`
- `v1.compute.nodeTypes.list`
- `v1.compute.packetMirrorings.aggregatedList`
- `v1.compute.packetMirrorings.delete`
- `v1.compute.packetMirrorings.get`
- `v1.compute.packetMirrorings.insert`
- `v1.compute.packetMirrorings.list`
- `v1.compute.packetMirrorings.patch`
- `v1.compute.packetMirrorings.testIamPermissions`
- `v1.compute.projects.disableXpnHost`
- `v1.compute.projects.disableXpnResource`
- `v1.compute.projects.enableXpnHost`
- `v1.compute.projects.enableXpnResource`
- `v1.compute.projects.get`
- `v1.compute.projects.getXpnHost`
- `v1.compute.projects.getXpnResources`
- `v1.compute.projects.listXpnHosts`
- `v1.compute.projects.moveDisk`
- `v1.compute.projects.moveInstance`
- `v1.compute.projects.setCommonInstanceMetadata`
- `v1.compute.projects.setDefaultNetworkTier`
- `v1.compute.projects.setUsageExportBucket`
- `v1.compute.publicAdvertisedPrefixes.delete`
- `v1.compute.publicAdvertisedPrefixes.get`
- `v1.compute.publicAdvertisedPrefixes.insert`
- `v1.compute.publicAdvertisedPrefixes.list`
- `v1.compute.publicAdvertisedPrefixes.patch`
- `v1.compute.publicDelegatedPrefixes.aggregatedList`
- `v1.compute.publicDelegatedPrefixes.delete`
- `v1.compute.publicDelegatedPrefixes.get`
- `v1.compute.publicDelegatedPrefixes.insert`
- `v1.compute.publicDelegatedPrefixes.list`
- `v1.compute.publicDelegatedPrefixes.patch`
- `v1.compute.regionAutoscalers.delete`
- `v1.compute.regionAutoscalers.get`
- `v1.compute.regionAutoscalers.insert`
- `v1.compute.regionAutoscalers.list`
- `v1.compute.regionAutoscalers.patch`
- `v1.compute.regionAutoscalers.update`
- `v1.compute.regionBackendServices.delete`
- `v1.compute.regionBackendServices.get`
- `v1.compute.regionBackendServices.getHealth`
- `v1.compute.regionBackendServices.insert`
- `v1.compute.regionBackendServices.list`
- `v1.compute.regionBackendServices.patch`
- `v1.compute.regionBackendServices.update`
- `v1.compute.regionCommitments.aggregatedList`
- `v1.compute.regionCommitments.get`
- `v1.compute.regionCommitments.insert`
- `v1.compute.regionCommitments.list`
- `v1.compute.regionCommitments.update`
- `v1.compute.regionDiskTypes.list`
- `v1.compute.regionDisks.addResourcePolicies`
- `v1.compute.regionDisks.createSnapshot`
- `v1.compute.regionDisks.delete`
- `v1.compute.regionDisks.get`
- `v1.compute.regionDisks.getIamPolicy`
- `v1.compute.regionDisks.insert`
- `v1.compute.regionDisks.list`
- `v1.compute.regionDisks.removeResourcePolicies`
- `v1.compute.regionDisks.resize`
- `v1.compute.regionDisks.setIamPolicy`
- `v1.compute.regionDisks.setLabels`
- `v1.compute.regionDisks.testIamPermissions`
- `v1.compute.regionHealthCheckServices.delete`
- `v1.compute.regionHealthCheckServices.get`
- `v1.compute.regionHealthCheckServices.insert`
- `v1.compute.regionHealthCheckServices.list`
- `v1.compute.regionHealthCheckServices.patch`
- `v1.compute.regionHealthChecks.delete`
- `v1.compute.regionHealthChecks.get`
- `v1.compute.regionHealthChecks.insert`
- `v1.compute.regionHealthChecks.list`
- `v1.compute.regionHealthChecks.patch`
- `v1.compute.regionHealthChecks.update`
- `v1.compute.regionInstanceGroupManagers.abandonInstances`
- `v1.compute.regionInstanceGroupManagers.applyUpdatesToInstances`
- `v1.compute.regionInstanceGroupManagers.createInstances`
- `v1.compute.regionInstanceGroupManagers.delete`
- `v1.compute.regionInstanceGroupManagers.deleteInstances`
- `v1.compute.regionInstanceGroupManagers.deletePerInstanceConfigs`
- `v1.compute.regionInstanceGroupManagers.get`
- `v1.compute.regionInstanceGroupManagers.insert`
- `v1.compute.regionInstanceGroupManagers.list`
- `v1.compute.regionInstanceGroupManagers.listErrors`
- `v1.compute.regionInstanceGroupManagers.listManagedInstances`
- `v1.compute.regionInstanceGroupManagers.listPerInstanceConfigs`
- `v1.compute.regionInstanceGroupManagers.patch`
- `v1.compute.regionInstanceGroupManagers.recreateInstances`
- `v1.compute.regionInstanceGroupManagers.resize`
- `v1.compute.regionInstanceGroupManagers.setInstanceTemplate`
- `v1.compute.regionInstanceGroupManagers.setTargetPools`
- `v1.compute.regionInstanceGroupManagers.updatePerInstanceConfigs`
- `v1.compute.regionInstanceGroups.get`
- `v1.compute.regionInstanceGroups.insert`
- `v1.compute.regionInstanceGroups.list`
- `v1.compute.regionInstanceGroups.listInstances`
- `v1.compute.regionInstanceGroups.setNamedPorts`
- `v1.compute.regionInstances.bulkInsert`
- `v1.compute.regionNetworkEndpointGroups.delete`
- `v1.compute.regionNetworkEndpointGroups.get`
- `v1.compute.regionNetworkEndpointGroups.insert`
- `v1.compute.regionNetworkEndpointGroups.list`
- `v1.compute.regionNetworkFirewallPolicies.addAssociation`
- `v1.compute.regionNetworkFirewallPolicies.addRule`
- `v1.compute.regionNetworkFirewallPolicies.cloneRules`
- `v1.compute.regionNetworkFirewallPolicies.delete`
- `v1.compute.regionNetworkFirewallPolicies.getIamPolicy`
- `v1.compute.regionNetworkFirewallPolicies.insert`
- `v1.compute.regionNetworkFirewallPolicies.list`
- `v1.compute.regionNetworkFirewallPolicies.patch`
- `v1.compute.regionNetworkFirewallPolicies.patchRule`
- `v1.compute.regionNetworkFirewallPolicies.removeAssociation`
- `v1.compute.regionNetworkFirewallPolicies.removeRule`
- `v1.compute.regionNetworkFirewallPolicies.setIamPolicy`
- `v1.compute.regionNetworkFirewallPolicies.testIamPermissions`
- `v1.compute.regionNotificationEndpoints.delete`
- `v1.compute.regionNotificationEndpoints.insert`
- `v1.compute.regionNotificationEndpoints.list`
- `v1.compute.regionOperations.delete`
- `v1.compute.regionOperations.get`
- `v1.compute.regionOperations.list`
- `v1.compute.regionOperations.wait`
- `v1.compute.regionSecurityPolicies.list`
- `v1.compute.regionSslCertificates.delete`
- `v1.compute.regionSslCertificates.get`
- `v1.compute.regionSslCertificates.insert`
- `v1.compute.regionSslCertificates.list`
- `v1.compute.regionTargetHttpProxies.delete`
- `v1.compute.regionTargetHttpProxies.get`
- `v1.compute.regionTargetHttpProxies.insert`
- `v1.compute.regionTargetHttpProxies.list`
- `v1.compute.regionTargetHttpProxies.setUrlMap`
- `v1.compute.regionTargetHttpsProxies.delete`
- `v1.compute.regionTargetHttpsProxies.get`
- `v1.compute.regionTargetHttpsProxies.insert`
- `v1.compute.regionTargetHttpsProxies.list`
- `v1.compute.regionTargetHttpsProxies.patch`
- `v1.compute.regionTargetHttpsProxies.setSslCertificates`
- `v1.compute.regionTargetHttpsProxies.setUrlMap`
- `v1.compute.regionUrlMaps.delete`
- `v1.compute.regionUrlMaps.get`
- `v1.compute.regionUrlMaps.insert`
- `v1.compute.regionUrlMaps.list`
- `v1.compute.regionUrlMaps.patch`
- `v1.compute.regionUrlMaps.update`
- `v1.compute.regions.get`
- `v1.compute.regions.list`
- `v1.compute.reservations.aggregatedList`
- `v1.compute.reservations.delete`
- `v1.compute.reservations.get`
- `v1.compute.reservations.getIamPolicy`
- `v1.compute.reservations.insert`
- `v1.compute.reservations.list`
- `v1.compute.reservations.resize`
- `v1.compute.reservations.setIamPolicy`
- `v1.compute.reservations.testIamPermissions`
- `v1.compute.reservations.update`
- `v1.compute.resourcePolicies.aggregatedList`
- `v1.compute.resourcePolicies.delete`
- `v1.compute.resourcePolicies.get`
- `v1.compute.resourcePolicies.getIamPolicy`
- `v1.compute.resourcePolicies.insert`
- `v1.compute.resourcePolicies.list`
- `v1.compute.resourcePolicies.setIamPolicy`
- `v1.compute.resourcePolicies.testIamPermissions`
- `v1.compute.routers.aggregatedList`
- `v1.compute.routers.delete`
- `v1.compute.routers.get`
- `v1.compute.routers.getNatMappingInfo`
- `v1.compute.routers.getRouterStatus`
- `v1.compute.routers.insert`
- `v1.compute.routers.list`
- `v1.compute.routers.patch`
- `v1.compute.routers.preview`
- `v1.compute.routers.update`
- `v1.compute.routes.delete`
- `v1.compute.routes.get`
- `v1.compute.routes.insert`
- `v1.compute.routes.list`
- `v1.compute.securityPolicies.addRule`
- `v1.compute.securityPolicies.aggregatedList`
- `v1.compute.securityPolicies.delete`
- `v1.compute.securityPolicies.get`
- `v1.compute.securityPolicies.getRule`
- `v1.compute.securityPolicies.insert`
- `v1.compute.securityPolicies.list`
- `v1.compute.securityPolicies.listPreconfiguredExpressionSets`
- `v1.compute.securityPolicies.patch`
- `v1.compute.securityPolicies.patchRule`
- `v1.compute.securityPolicies.removeRule`
- `v1.compute.serviceAttachments.aggregatedList`
- `v1.compute.serviceAttachments.delete`
- `v1.compute.serviceAttachments.get`
- `v1.compute.serviceAttachments.insert`
- `v1.compute.serviceAttachments.list`
- `v1.compute.serviceAttachments.patch`
- `v1.compute.serviceAttachments.testIamPermissions`
- `v1.compute.snapshots.delete`
- `v1.compute.snapshots.get`
- `v1.compute.snapshots.getIamPolicy`
- `v1.compute.snapshots.insert`
- `v1.compute.snapshots.list`
- `v1.compute.snapshots.setIamPolicy`
- `v1.compute.snapshots.setLabels`
- `v1.compute.snapshots.testIamPermissions`
- `v1.compute.sslCertificates.aggregatedList`
- `v1.compute.sslCertificates.delete`
- `v1.compute.sslCertificates.get`
- `v1.compute.sslCertificates.insert`
- `v1.compute.sslCertificates.list`
- `v1.compute.sslPolicies.delete`
- `v1.compute.sslPolicies.get`
- `v1.compute.sslPolicies.insert`
- `v1.compute.sslPolicies.list`
- `v1.compute.sslPolicies.patch`
- `v1.compute.subnetworks.aggregatedList`
- `v1.compute.subnetworks.delete`
- `v1.compute.subnetworks.expandIpCidrRange`
- `v1.compute.subnetworks.get`
- `v1.compute.subnetworks.getIamPolicy`
- `v1.compute.subnetworks.insert`
- `v1.compute.subnetworks.list`
- `v1.compute.subnetworks.patch`
- `v1.compute.subnetworks.setIamPolicy`
- `v1.compute.subnetworks.setPrivateIpGoogleAccess`
- `v1.compute.subnetworks.testIamPermissions`
- `v1.compute.targetGrpcProxies.insert`
- `v1.compute.targetHttpProxies.aggregatedList`
- `v1.compute.targetHttpProxies.delete`
- `v1.compute.targetHttpProxies.get`
- `v1.compute.targetHttpProxies.insert`
- `v1.compute.targetHttpProxies.list`
- `v1.compute.targetHttpProxies.patch`
- `v1.compute.targetHttpProxies.setUrlMap`
- `v1.compute.targetHttpsProxies.aggregatedList`
- `v1.compute.targetHttpsProxies.delete`
- `v1.compute.targetHttpsProxies.get`
- `v1.compute.targetHttpsProxies.insert`
- `v1.compute.targetHttpsProxies.list`
- `v1.compute.targetHttpsProxies.patch`
- `v1.compute.targetHttpsProxies.setQuicOverride`
- `v1.compute.targetHttpsProxies.setSslCertificates`
- `v1.compute.targetHttpsProxies.setSslPolicy`
- `v1.compute.targetHttpsProxies.setUrlMap`
- `v1.compute.targetInstances.aggregatedList`
- `v1.compute.targetInstances.delete`
- `v1.compute.targetInstances.get`
- `v1.compute.targetInstances.insert`
- `v1.compute.targetInstances.list`
- `v1.compute.targetPools.addHealthCheck`
- `v1.compute.targetPools.addInstance`
- `v1.compute.targetPools.aggregatedList`
- `v1.compute.targetPools.delete`
- `v1.compute.targetPools.get`
- `v1.compute.targetPools.getHealth`
- `v1.compute.targetPools.insert`
- `v1.compute.targetPools.list`
- `v1.compute.targetPools.removeHealthCheck`
- `v1.compute.targetPools.removeInstance`
- `v1.compute.targetPools.setBackup`
- `v1.compute.targetSslProxies.delete`
- `v1.compute.targetSslProxies.get`
- `v1.compute.targetSslProxies.insert`
- `v1.compute.targetSslProxies.list`
- `v1.compute.targetSslProxies.setBackendService`
- `v1.compute.targetSslProxies.setProxyHeader`
- `v1.compute.targetSslProxies.setSslCertificates`
- `v1.compute.targetSslProxies.setSslPolicy`
- `v1.compute.targetTcpProxies.delete`
- `v1.compute.targetTcpProxies.get`
- `v1.compute.targetTcpProxies.insert`
- `v1.compute.targetTcpProxies.list`
- `v1.compute.targetTcpProxies.setBackendService`
- `v1.compute.targetTcpProxies.setProxyHeader`
- `v1.compute.targetVpnGateways.aggregatedList`
- `v1.compute.targetVpnGateways.delete`
- `v1.compute.targetVpnGateways.get`
- `v1.compute.targetVpnGateways.insert`
- `v1.compute.targetVpnGateways.list`
- `v1.compute.urlMaps.aggregatedList`
- `v1.compute.urlMaps.delete`
- `v1.compute.urlMaps.get`
- `v1.compute.urlMaps.insert`
- `v1.compute.urlMaps.invalidateCache`
- `v1.compute.urlMaps.list`
- `v1.compute.urlMaps.patch`
- `v1.compute.urlMaps.update`
- `v1.compute.urlMaps.validate`
- `v1.compute.vpnGateways.aggregatedList`
- `v1.compute.vpnGateways.delete`
- `v1.compute.vpnGateways.insert`
- `v1.compute.vpnGateways.list`
- `v1.compute.vpnGateways.setLabels`
- `v1.compute.vpnGateways.testIamPermissions`
- `v1.compute.vpnTunnels.aggregatedList`
- `v1.compute.vpnTunnels.delete`
- `v1.compute.vpnTunnels.get`
- `v1.compute.vpnTunnels.insert`
- `v1.compute.vpnTunnels.list`
- `v1.compute.zoneOperations.delete`
- `v1.compute.zoneOperations.get`
- `v1.compute.zoneOperations.list`
- `v1.compute.zoneOperations.wait`
- `v1.compute.zones.get`
- `v1.compute.zones.list`

### Contact Center AI

#### `serviceName`

- `contactcenterinsights.googleapis.com`

#### `methodName`

- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.CalculateIssueModelStats`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.CalculateStats`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreateAnalysis`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreateConversation`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreateIssueModel`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreatePhraseMatcher`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreateView`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeleteAnalysis`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeleteConversation`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeleteIssueModel`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeletePhraseMatcher`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeleteView`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeployIssueModel`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.ExportInsightsData`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetAnalysis`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetConversation`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetIssue`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetIssueModel`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetPhraseMatcher`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetSettings`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetView`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.IngestConversations`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListAnalyses`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListConversations`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListIssueModels`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListIssues`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListPhraseMatchers`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListViews`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.UndeployIssueModel`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateConversation`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateIssue`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateIssueModel`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdatePhraseMatcher`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateSettings`
- `google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateView`
- `google.cloud.contactcenterinsights.v1main.ContactCenterInsights.ListIssueModels`

### Container Analysis

#### `serviceName`

- `containeranalysis.googleapis.com`

#### `methodName`

- `google.devtools.containeranalysis.v1.ContainerAnalysis.GetIamPolicy`
- `google.devtools.containeranalysis.v1.ContainerAnalysis.GetUpgradeSummary`
- `google.devtools.containeranalysis.v1.ContainerAnalysis.GetVulnerabilityOccurrencesSummary`
- `google.devtools.containeranalysis.v1.ContainerAnalysis.ListResourceUpgradeSummaries`
- `google.devtools.containeranalysis.v1.ContainerAnalysis.SetIamPolicy`
- `google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.GetIamPolicy`
- `google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.SetIamPolicy`
- `grafeas.v1.Grafeas.BatchCreateNotes`
- `grafeas.v1.Grafeas.BatchCreateOccurrences`
- `grafeas.v1.Grafeas.CreateNote`
- `grafeas.v1.Grafeas.CreateOccurrence`
- `grafeas.v1.Grafeas.DeleteNote`
- `grafeas.v1.Grafeas.DeleteOccurrence`
- `grafeas.v1.Grafeas.GetNote`
- `grafeas.v1.Grafeas.GetOccurrence`
- `grafeas.v1.Grafeas.GetOccurrenceNote`
- `grafeas.v1.Grafeas.ListNoteOccurrences`
- `grafeas.v1.Grafeas.ListNotes`
- `grafeas.v1.Grafeas.ListOccurrences`
- `grafeas.v1.Grafeas.UpdateNote`
- `grafeas.v1.Grafeas.UpdateOccurrence`
- `grafeas.v1beta1.GrafeasV1Beta1.BatchCreateNotes`
- `grafeas.v1beta1.GrafeasV1Beta1.BatchCreateOccurrences`
- `grafeas.v1beta1.GrafeasV1Beta1.CreateNote`
- `grafeas.v1beta1.GrafeasV1Beta1.CreateOccurrence`
- `grafeas.v1beta1.GrafeasV1Beta1.DeleteNote`
- `grafeas.v1beta1.GrafeasV1Beta1.DeleteOccurrence`
- `grafeas.v1beta1.GrafeasV1Beta1.GetNote`
- `grafeas.v1beta1.GrafeasV1Beta1.GetOccurrence`
- `grafeas.v1beta1.GrafeasV1Beta1.GetOccurrenceNote`
- `grafeas.v1beta1.GrafeasV1Beta1.GetVulnerabilityOccurrencesSummary`
- `grafeas.v1beta1.GrafeasV1Beta1.ListNoteOccurrences`
- `grafeas.v1beta1.GrafeasV1Beta1.ListNotes`
- `grafeas.v1beta1.GrafeasV1Beta1.ListOccurrences`
- `grafeas.v1beta1.GrafeasV1Beta1.UpdateNote`
- `grafeas.v1beta1.GrafeasV1Beta1.UpdateOccurrence`

### Transparency and Control Center Audit Logging

#### `serviceName`

- `customerusagedataprocessing.googleapis.com`

#### `methodName`

- `google.cloud.bi.customerusagedataprocessing.v1.DataProcessingGroupControlService.ListEffectiveDataProcessingGroupControls`
- `google.cloud.bi.customerusagedataprocessing.v1beta.DataProcessingGroupControlService.ListEffectiveDataProcessingGroupControls`

### Cloud Data Catalog

#### `serviceName`

- `datacatalog.googleapis.com`

#### `methodName`

- `google.cloud.datacatalog.v1.DataCatalog.CreateEntry`
- `google.cloud.datacatalog.v1.DataCatalog.CreateEntryGroup`
- `google.cloud.datacatalog.v1.DataCatalog.CreateTag`
- `google.cloud.datacatalog.v1.DataCatalog.CreateTagTemplate`
- `google.cloud.datacatalog.v1.DataCatalog.CreateTagTemplateField`
- `google.cloud.datacatalog.v1.DataCatalog.DeleteEntry`
- `google.cloud.datacatalog.v1.DataCatalog.DeleteEntryGroup`
- `google.cloud.datacatalog.v1.DataCatalog.DeleteTag`
- `google.cloud.datacatalog.v1.DataCatalog.DeleteTagTemplate`
- `google.cloud.datacatalog.v1.DataCatalog.DeleteTagTemplateField`
- `google.cloud.datacatalog.v1.DataCatalog.ExportMetadata`
- `google.cloud.datacatalog.v1.DataCatalog.GetEntry`
- `google.cloud.datacatalog.v1.DataCatalog.GetEntryGroup`
- `google.cloud.datacatalog.v1.DataCatalog.GetIamPolicy`
- `google.cloud.datacatalog.v1.DataCatalog.GetTagTemplate`
- `google.cloud.datacatalog.v1.DataCatalog.ListEntries`
- `google.cloud.datacatalog.v1.DataCatalog.ListEntryGroups`
- `google.cloud.datacatalog.v1.DataCatalog.ListTags`
- `google.cloud.datacatalog.v1.DataCatalog.LookupEntry`
- `google.cloud.datacatalog.v1.DataCatalog.RenameTagTemplateField`
- `google.cloud.datacatalog.v1.DataCatalog.RenameTagTemplateFieldEnumValue`
- `google.cloud.datacatalog.v1.DataCatalog.SetIamPolicy`
- `google.cloud.datacatalog.v1.DataCatalog.TestUpdateTagPermission`
- `google.cloud.datacatalog.v1.DataCatalog.UpdateEntry`
- `google.cloud.datacatalog.v1.DataCatalog.UpdateEntryGroup`
- `google.cloud.datacatalog.v1.DataCatalog.UpdateTag`
- `google.cloud.datacatalog.v1.DataCatalog.UpdateTagTemplate`
- `google.cloud.datacatalog.v1.DataCatalog.UpdateTagTemplateField`
- `google.cloud.datacatalog.v1.PolicyTagManager.GetIamPolicy`
- `google.cloud.datacatalog.v1.PolicyTagManager.SetIamPolicy`
- `google.cloud.datacatalog.v1beta1.DataCatalog.GetIamPolicy`
- `google.cloud.datacatalog.v1beta1.DataCatalog.RenameTagTemplateFieldEnumValue`
- `google.cloud.datacatalog.v1beta1.DataCatalog.SetIamPolicy`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.CreatePolicyTag`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.CreateTaxonomy`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.DeletePolicyTag`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.DeleteTaxonomy`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.GetIamPolicy`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.GetPolicyTag`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.GetTaxonomy`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.ListOrgTaxonomies`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.ListPolicyTags`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.ListTaxonomies`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.SetIamPolicy`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.UpdatePolicyTag`
- `google.cloud.datacatalog.v1beta1.PolicyTagManager.UpdateTaxonomy`
- `google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization.ExportTaxonomies`
- `google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization.ImportTaxonomies`
- `google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization.ReplaceTaxonomy`

### Cloud Data Fusion

#### `serviceName`

- `datafusion.googleapis.com`

#### `methodName`

- `DummyOpGetInstance`
- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.datafusion.v1.DataFusion.CreateInstance`
- `google.cloud.datafusion.v1.DataFusion.DeleteInstance`
- `google.cloud.datafusion.v1.DataFusion.GetInstance`
- `google.cloud.datafusion.v1.DataFusion.ListAvailableVersions`
- `google.cloud.datafusion.v1.DataFusion.ListInstances`
- `google.cloud.datafusion.v1.DataFusion.RestartInstance`
- `google.cloud.datafusion.v1.DataFusion.UpdateInstance`
- `google.cloud.datafusion.v1beta1.DataFusion.AddDnsPeering`
- `google.cloud.datafusion.v1beta1.DataFusion.CreateDnsPeering`
- `google.cloud.datafusion.v1beta1.DataFusion.CreateInstance`
- `google.cloud.datafusion.v1beta1.DataFusion.DeleteInstance`
- `google.cloud.datafusion.v1beta1.DataFusion.GetInstance`
- `google.cloud.datafusion.v1beta1.DataFusion.ListAvailableVersions`
- `google.cloud.datafusion.v1beta1.DataFusion.ListDnsPeerings`
- `google.cloud.datafusion.v1beta1.DataFusion.ListInstances`
- `google.cloud.datafusion.v1beta1.DataFusion.RemoveDnsPeering`
- `google.cloud.datafusion.v1beta1.DataFusion.RemoveIamPolicy`
- `google.cloud.datafusion.v1beta1.DataFusion.RestartInstance`
- `google.cloud.datafusion.v1beta1.DataFusion.UpdateInstance`
- `google.cloud.datafusion.v1beta1.DataFusion.UpgradeInstance`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud AI Data Labelling

#### `serviceName`

- `datalabeling.googleapis.com`

#### `methodName`

- `google.cloud.datalabeling.v1beta1.DataLabelingService.CreateAnnotationSpecSet`
- `google.cloud.datalabeling.v1beta1.DataLabelingService.CreateDataset`
- `google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteAnnotatedDataset`
- `google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteAnnotationSpecSet`
- `google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteDataset`
- `google.cloud.datalabeling.v1beta1.DataLabelingService.ImportData`
- `google.longrunning.Operations.GetOperation`

### undefined

#### `serviceName`

- `datalineage.googleapis.com`

#### `methodName`

- `google.cloud.datacatalog.lineage.v1.Lineage.GetProcess`

### Database Migration

#### `serviceName`

- `datamigration.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.clouddms.v1.DataMigrationService.CommitConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.ConvertConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.CreateConnectionProfile`
- `google.cloud.clouddms.v1.DataMigrationService.CreateConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.CreateMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.DeleteConnectionProfile`
- `google.cloud.clouddms.v1.DataMigrationService.DeleteConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.DeleteMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.DescribeDatabaseEntities`
- `google.cloud.clouddms.v1.DataMigrationService.GenerateSshScript`
- `google.cloud.clouddms.v1.DataMigrationService.GetConnectionProfile`
- `google.cloud.clouddms.v1.DataMigrationService.GetConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.GetMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.ImportMappingRules`
- `google.cloud.clouddms.v1.DataMigrationService.ListConnectionProfiles`
- `google.cloud.clouddms.v1.DataMigrationService.ListConversionWorkspaces`
- `google.cloud.clouddms.v1.DataMigrationService.ListMappingRules`
- `google.cloud.clouddms.v1.DataMigrationService.ListMigrationJobs`
- `google.cloud.clouddms.v1.DataMigrationService.PromoteMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.RestartMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.ResumeMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.RollbackConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.SearchBackgroundJobs`
- `google.cloud.clouddms.v1.DataMigrationService.SeedConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.StartMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.StopMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.UpdateConnectionProfile`
- `google.cloud.clouddms.v1.DataMigrationService.UpdateConversionWorkspace`
- `google.cloud.clouddms.v1.DataMigrationService.UpdateMigrationJob`
- `google.cloud.clouddms.v1.DataMigrationService.VerifyMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.CreateConnectionProfile`
- `google.cloud.clouddms.v1beta1.DataMigrationService.CreateMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.DeleteConnectionProfile`
- `google.cloud.clouddms.v1beta1.DataMigrationService.DeleteMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.GenerateSshScript`
- `google.cloud.clouddms.v1beta1.DataMigrationService.GetConnectionProfile`
- `google.cloud.clouddms.v1beta1.DataMigrationService.GetMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.ListConnectionProfiles`
- `google.cloud.clouddms.v1beta1.DataMigrationService.ListMigrationJobs`
- `google.cloud.clouddms.v1beta1.DataMigrationService.PromoteMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.RestartMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.ResumeMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.StartMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.StopMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.UpdateConnectionProfile`
- `google.cloud.clouddms.v1beta1.DataMigrationService.UpdateMigrationJob`
- `google.cloud.clouddms.v1beta1.DataMigrationService.VerifyMigrationJob`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Data Pipeline

#### `serviceName`

- `datapipelines.googleapis.com`

#### `methodName`

- `google.cloud.datapipelines.v1.Pipelines.CreatePipeline`
- `google.cloud.datapipelines.v1.Pipelines.DeletePipeline`
- `google.cloud.datapipelines.v1.Pipelines.GetPipeline`
- `google.cloud.datapipelines.v1.Pipelines.ListJobs`
- `google.cloud.datapipelines.v1.Pipelines.ListPipelines`
- `google.cloud.datapipelines.v1.Pipelines.RunPipeline`
- `google.cloud.datapipelines.v1.Pipelines.StopPipeline`
- `google.cloud.datapipelines.v1.Pipelines.UpdatePipeline`

### Cloud Dataproc

#### `serviceName`

- `dataproc.googleapis.com`

#### `methodName`

- `google.cloud.dataproc.control.v1.AgentService.CreateAgent`
- `google.cloud.dataproc.control.v1.AgentService.CreateJobMetrics`
- `google.cloud.dataproc.control.v1.AgentService.GetAgent`
- `google.cloud.dataproc.control.v1.AgentService.ListMembers`
- `google.cloud.dataproc.control.v1.AgentService.ListSecrets`
- `google.cloud.dataproc.control.v1.AgentService.UpdateActivityInfo`
- `google.cloud.dataproc.control.v1.AgentService.UpdateAgent`
- `google.cloud.dataproc.v1.AutoscalingPolicyService.CreateAutoscalingPolicy`
- `google.cloud.dataproc.v1.AutoscalingPolicyService.DeleteAutoscalingPolicy`
- `google.cloud.dataproc.v1.AutoscalingPolicyService.GetAutoscalingPolicy`
- `google.cloud.dataproc.v1.AutoscalingPolicyService.ListAutoscalingPolicies`
- `google.cloud.dataproc.v1.AutoscalingPolicyService.UpdateAutoscalingPolicy`
- `google.cloud.dataproc.v1.BatchController.CreateBatch`
- `google.cloud.dataproc.v1.BatchController.DeleteBatch`
- `google.cloud.dataproc.v1.BatchController.GetBatch`
- `google.cloud.dataproc.v1.BatchController.ListBatches`
- `google.cloud.dataproc.v1.ClusterController.CreateCluster`
- `google.cloud.dataproc.v1.ClusterController.DeleteCluster`
- `google.cloud.dataproc.v1.ClusterController.DiagnoseCluster`
- `google.cloud.dataproc.v1.ClusterController.GetCluster`
- `google.cloud.dataproc.v1.ClusterController.InjectCredentials`
- `google.cloud.dataproc.v1.ClusterController.ListClusters`
- `google.cloud.dataproc.v1.ClusterController.StartCluster`
- `google.cloud.dataproc.v1.ClusterController.StopCluster`
- `google.cloud.dataproc.v1.ClusterController.UpdateCluster`
- `google.cloud.dataproc.v1.JobController.CancelJob`
- `google.cloud.dataproc.v1.JobController.DeleteJob`
- `google.cloud.dataproc.v1.JobController.GetJob`
- `google.cloud.dataproc.v1.JobController.ListJobs`
- `google.cloud.dataproc.v1.JobController.SubmitJob`
- `google.cloud.dataproc.v1.JobController.SubmitJobAsOperation`
- `google.cloud.dataproc.v1.JobController.UpdateJob`
- `google.cloud.dataproc.v1.SessionController.CreateSession`
- `google.cloud.dataproc.v1.SessionController.DeleteSession`
- `google.cloud.dataproc.v1.SessionController.GetSession`
- `google.cloud.dataproc.v1.SessionController.ListSessions`
- `google.cloud.dataproc.v1.SessionController.TerminateSession`
- `google.cloud.dataproc.v1.WorkflowTemplateService.CreateWorkflowTemplate`
- `google.cloud.dataproc.v1.WorkflowTemplateService.DeleteWorkflowTemplate`
- `google.cloud.dataproc.v1.WorkflowTemplateService.GetWorkflowTemplate`
- `google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateInlineWorkflowTemplate`
- `google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateWorkflowTemplate`
- `google.cloud.dataproc.v1.WorkflowTemplateService.ListWorkflowTemplates`
- `google.cloud.dataproc.v1.WorkflowTemplateService.UpdateWorkflowTemplate`
- `google.cloud.dataproc.v1beta2.AutoscalingPolicyService.CreateAutoscalingPolicy`
- `google.cloud.dataproc.v1beta2.AutoscalingPolicyService.DeleteAutoscalingPolicy`
- `google.cloud.dataproc.v1beta2.AutoscalingPolicyService.GetAutoscalingPolicy`
- `google.cloud.dataproc.v1beta2.AutoscalingPolicyService.ListAutoscalingPolicies`
- `google.cloud.dataproc.v1beta2.AutoscalingPolicyService.UpdateAutoscalingPolicy`
- `google.cloud.dataproc.v1beta2.ClusterController.CreateCluster`
- `google.cloud.dataproc.v1beta2.ClusterController.DeleteCluster`
- `google.cloud.dataproc.v1beta2.ClusterController.DiagnoseCluster`
- `google.cloud.dataproc.v1beta2.ClusterController.GetCluster`
- `google.cloud.dataproc.v1beta2.ClusterController.ListClusters`
- `google.cloud.dataproc.v1beta2.ClusterController.StartCluster`
- `google.cloud.dataproc.v1beta2.ClusterController.StopCluster`
- `google.cloud.dataproc.v1beta2.ClusterController.UpdateCluster`
- `google.cloud.dataproc.v1beta2.JobController.CancelJob`
- `google.cloud.dataproc.v1beta2.JobController.DeleteJob`
- `google.cloud.dataproc.v1beta2.JobController.GetJob`
- `google.cloud.dataproc.v1beta2.JobController.ListJobs`
- `google.cloud.dataproc.v1beta2.JobController.SubmitJob`
- `google.cloud.dataproc.v1beta2.JobController.SubmitJobAsOperation`
- `google.cloud.dataproc.v1beta2.WorkflowTemplateService.CreateWorkflowTemplate`
- `google.cloud.dataproc.v1beta2.WorkflowTemplateService.DeleteWorkflowTemplate`
- `google.cloud.dataproc.v1beta2.WorkflowTemplateService.GetWorkflowTemplate`
- `google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateInlineWorkflowTemplate`
- `google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateWorkflowTemplate`
- `google.cloud.dataproc.v1beta2.WorkflowTemplateService.ListWorkflowTemplates`
- `google.cloud.dataproc.v1beta2.WorkflowTemplateService.UpdateWorkflowTemplate`
- `google.iam.v1.IAMPolicy.GetIamPolicy`
- `google.iam.v1.IAMPolicy.SetIamPolicy`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud Datastore

#### `serviceName`

- `datastore.googleapis.com`

#### `methodName`

- `google.datastore.admin.v1.DatastoreAdmin.CreateIndex`
- `google.datastore.admin.v1.DatastoreAdmin.DeleteIndex`
- `google.datastore.admin.v1.DatastoreAdmin.ExportEntities`
- `google.datastore.admin.v1.DatastoreAdmin.GetIndex`
- `google.datastore.admin.v1.DatastoreAdmin.ImportEntities`
- `google.datastore.admin.v1.DatastoreAdmin.ListIndexes`
- `google.datastore.admin.v1.DatastoreAdmin.PauseMigration`
- `google.datastore.admin.v1.DatastoreAdmin.ResumeMigration`
- `google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities`
- `google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities`
- `google.datastore.v1.Datastore.AllocateIds`
- `google.datastore.v1.Datastore.BeginTransaction`
- `google.datastore.v1.Datastore.Commit`
- `google.datastore.v1.Datastore.Lookup`
- `google.datastore.v1.Datastore.ReserveIds`
- `google.datastore.v1.Datastore.Rollback`
- `google.datastore.v1.Datastore.RunQuery`
- `google.datastore.v1beta3.Datastore.AllocateIds`
- `google.datastore.v1beta3.Datastore.BeginTransaction`
- `google.datastore.v1beta3.Datastore.Commit`
- `google.datastore.v1beta3.Datastore.Lookup`
- `google.datastore.v1beta3.Datastore.ReserveIds`
- `google.datastore.v1beta3.Datastore.Rollback`
- `google.datastore.v1beta3.Datastore.RunQuery`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Datastream

#### `serviceName`

- `datastream.googleapis.com`

#### `methodName`

- `google.cloud.datastream.v1.Datastream.CreateConnectionProfile`
- `google.cloud.datastream.v1.Datastream.CreatePrivateConnection`
- `google.cloud.datastream.v1.Datastream.CreateRoute`
- `google.cloud.datastream.v1.Datastream.CreateStream`
- `google.cloud.datastream.v1.Datastream.DeleteConnectionProfile`
- `google.cloud.datastream.v1.Datastream.DeletePrivateConnection`
- `google.cloud.datastream.v1.Datastream.DeleteRoute`
- `google.cloud.datastream.v1.Datastream.DeleteStream`
- `google.cloud.datastream.v1.Datastream.DiscoverConnectionProfile`
- `google.cloud.datastream.v1.Datastream.FetchStaticIps`
- `google.cloud.datastream.v1.Datastream.GetConnectionProfile`
- `google.cloud.datastream.v1.Datastream.GetPrivateConnection`
- `google.cloud.datastream.v1.Datastream.GetRoute`
- `google.cloud.datastream.v1.Datastream.GetStream`
- `google.cloud.datastream.v1.Datastream.GetStreamObject`
- `google.cloud.datastream.v1.Datastream.ListConnectionProfiles`
- `google.cloud.datastream.v1.Datastream.ListPrivateConnections`
- `google.cloud.datastream.v1.Datastream.ListRoutes`
- `google.cloud.datastream.v1.Datastream.ListStreamObjects`
- `google.cloud.datastream.v1.Datastream.ListStreams`
- `google.cloud.datastream.v1.Datastream.LookupStreamObject`
- `google.cloud.datastream.v1.Datastream.StartBackfillJob`
- `google.cloud.datastream.v1.Datastream.StopBackfillJob`
- `google.cloud.datastream.v1.Datastream.UpdateConnectionProfile`
- `google.cloud.datastream.v1.Datastream.UpdateStream`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud Deployment Manager

#### `serviceName`

- `deploymentmanager.googleapis.com`

#### `methodName`

- `dogfood.deploymentmanager.deployments.cancelPreview`
- `dogfood.deploymentmanager.deployments.patch`
- `dogfood.deploymentmanager.deployments.stop`
- `v2.deploymentmanager.deployments.cancelPreview`
- `v2.deploymentmanager.deployments.delete`
- `v2.deploymentmanager.deployments.get`
- `v2.deploymentmanager.deployments.getIamPolicy`
- `v2.deploymentmanager.deployments.insert`
- `v2.deploymentmanager.deployments.list`
- `v2.deploymentmanager.deployments.patch`
- `v2.deploymentmanager.deployments.setIamPolicy`
- `v2.deploymentmanager.deployments.stop`
- `v2.deploymentmanager.deployments.testIamPermissions`
- `v2.deploymentmanager.deployments.update`
- `v2.deploymentmanager.manifests.get`
- `v2.deploymentmanager.manifests.list`
- `v2.deploymentmanager.operations.get`
- `v2.deploymentmanager.operations.list`
- `v2.deploymentmanager.resources.get`
- `v2.deploymentmanager.resources.list`
- `v2.deploymentmanager.types.list`
- `v2beta.deploymentmanager.deployments.cancelPreview`
- `v2beta.deploymentmanager.deployments.delete`
- `v2beta.deploymentmanager.deployments.get`
- `v2beta.deploymentmanager.deployments.insert`
- `v2beta.deploymentmanager.deployments.list`
- `v2beta.deploymentmanager.deployments.patch`
- `v2beta.deploymentmanager.deployments.stop`
- `v2beta.deploymentmanager.deployments.update`
- `v2beta.deploymentmanager.manifests.get`
- `v2beta.deploymentmanager.manifests.list`
- `v2beta.deploymentmanager.operations.get`
- `v2beta.deploymentmanager.operations.list`
- `v2beta.deploymentmanager.resources.list`

### Cloud Dialogflow

#### `serviceName`

- `dialogflow.googleapis.com`

#### `methodName`

- `google.cloud.dialogflow.aam.v2beta1.AamAdminTool.DisplayStats`
- `google.cloud.dialogflow.aam.v2beta1.AamAdminTool.ImportPrebuiltTaxonomy`
- `google.cloud.dialogflow.aam.v2beta1.AamAdminTool.PreviewPrebuiltTaxonomy`
- `google.cloud.dialogflow.aam.v2beta1.AamDatasets.SearchAamDataset`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminantChanges.ApproveAamDiscriminantChange`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminantChanges.ListAamDiscriminantChanges`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminantChanges.RejectAamDiscriminantChange`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.CreateAamDiscriminant`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.DeleteAamDiscriminant`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.DisplayTaxonomyProgress`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.GetAamDiscriminant`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.ListAamDiscriminants`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.ListCompositeAamDiscriminants`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.MergeAamDiscriminant`
- `google.cloud.dialogflow.aam.v2beta1.AamDiscriminants.UpdateAamDiscriminant`
- `google.cloud.dialogflow.aam.v2beta1.AamLabels.ListAamLabels`
- `google.cloud.dialogflow.aam.v2beta1.AamLabels.MarkLabelsReviewed`
- `google.cloud.dialogflow.aam.v2beta1.AamNotices.UpdateAamNotice`
- `google.cloud.dialogflow.aam.v2beta1.AamTasks.CompleteAamTask`
- `google.cloud.dialogflow.aam.v2beta1.AamTasks.GenerateAamFlowTask`
- `google.cloud.dialogflow.aam.v2beta1.AamTasks.GenerateAamReviewTask`
- `google.cloud.dialogflow.aam.v2beta1.AamTasks.GenerateAamTask`
- `google.cloud.dialogflow.aam.v2beta1.AamTasks.GenerateAamTranscriptTask`
- `google.cloud.dialogflow.aam.v2beta1.AamTranscripts.DeleteAamTranscript`
- `google.cloud.dialogflow.aam.v2beta1.AamTranscripts.ListFlowLabeledAamTranscripts`
- `google.cloud.dialogflow.cx.v3.Agents.CreateAgent`
- `google.cloud.dialogflow.cx.v3.Agents.DeleteAgent`
- `google.cloud.dialogflow.cx.v3.Agents.ExportAgent`
- `google.cloud.dialogflow.cx.v3.Agents.GetAgent`
- `google.cloud.dialogflow.cx.v3.Agents.GetAgentValidationResult`
- `google.cloud.dialogflow.cx.v3.Agents.ListAgents`
- `google.cloud.dialogflow.cx.v3.Agents.RestoreAgent`
- `google.cloud.dialogflow.cx.v3.Agents.UpdateAgent`
- `google.cloud.dialogflow.cx.v3.Agents.ValidateAgent`
- `google.cloud.dialogflow.cx.v3.Changelogs.ListChangelogs`
- `google.cloud.dialogflow.cx.v3.EntityTypes.CreateEntityType`
- `google.cloud.dialogflow.cx.v3.EntityTypes.DeleteEntityType`
- `google.cloud.dialogflow.cx.v3.EntityTypes.GetEntityType`
- `google.cloud.dialogflow.cx.v3.EntityTypes.ListEntityTypes`
- `google.cloud.dialogflow.cx.v3.EntityTypes.UpdateEntityType`
- `google.cloud.dialogflow.cx.v3.Environments.CreateEnvironment`
- `google.cloud.dialogflow.cx.v3.Environments.ListEnvironments`
- `google.cloud.dialogflow.cx.v3.Environments.UpdateEnvironment`
- `google.cloud.dialogflow.cx.v3.Flows.CreateFlow`
- `google.cloud.dialogflow.cx.v3.Flows.DeleteFlow`
- `google.cloud.dialogflow.cx.v3.Flows.ExportFlow`
- `google.cloud.dialogflow.cx.v3.Flows.GetFlow`
- `google.cloud.dialogflow.cx.v3.Flows.GetFlowValidationResult`
- `google.cloud.dialogflow.cx.v3.Flows.ImportFlow`
- `google.cloud.dialogflow.cx.v3.Flows.ListFlows`
- `google.cloud.dialogflow.cx.v3.Flows.TrainFlow`
- `google.cloud.dialogflow.cx.v3.Flows.UpdateFlow`
- `google.cloud.dialogflow.cx.v3.Flows.ValidateFlow`
- `google.cloud.dialogflow.cx.v3.Intents.CreateIntent`
- `google.cloud.dialogflow.cx.v3.Intents.DeleteIntent`
- `google.cloud.dialogflow.cx.v3.Intents.GetIntent`
- `google.cloud.dialogflow.cx.v3.Intents.ListIntents`
- `google.cloud.dialogflow.cx.v3.Intents.UpdateIntent`
- `google.cloud.dialogflow.cx.v3.Pages.CreatePage`
- `google.cloud.dialogflow.cx.v3.Pages.DeletePage`
- `google.cloud.dialogflow.cx.v3.Pages.GetPage`
- `google.cloud.dialogflow.cx.v3.Pages.ListPages`
- `google.cloud.dialogflow.cx.v3.Pages.UpdatePage`
- `google.cloud.dialogflow.cx.v3.SecuritySettingsService.CreateLocationSettings`
- `google.cloud.dialogflow.cx.v3.SecuritySettingsService.CreateSecuritySettings`
- `google.cloud.dialogflow.cx.v3.SecuritySettingsService.DeleteSecuritySettings`
- `google.cloud.dialogflow.cx.v3.SecuritySettingsService.GetLocationSettings`
- `google.cloud.dialogflow.cx.v3.SecuritySettingsService.GetSecuritySettings`
- `google.cloud.dialogflow.cx.v3.SecuritySettingsService.ListSecuritySettings`
- `google.cloud.dialogflow.cx.v3.SecuritySettingsService.UpdateSecuritySettings`
- `google.cloud.dialogflow.cx.v3.SessionEntityTypes.CreateSessionEntityType`
- `google.cloud.dialogflow.cx.v3.SessionEntityTypes.GetSessionEntityType`
- `google.cloud.dialogflow.cx.v3.Sessions.DetectIntent`
- `google.cloud.dialogflow.cx.v3.Sessions.FulfillIntent`
- `google.cloud.dialogflow.cx.v3.Sessions.MatchIntent`
- `google.cloud.dialogflow.cx.v3.Sessions.StreamingDetectIntent`
- `google.cloud.dialogflow.cx.v3.TestCases.BatchDeleteTestCases`
- `google.cloud.dialogflow.cx.v3.TestCases.BatchRunTestCases`
- `google.cloud.dialogflow.cx.v3.TestCases.CalculateCoverage`
- `google.cloud.dialogflow.cx.v3.TestCases.CreateTestCase`
- `google.cloud.dialogflow.cx.v3.TestCases.ExportTestCases`
- `google.cloud.dialogflow.cx.v3.TestCases.ImportTestCases`
- `google.cloud.dialogflow.cx.v3.TestCases.ListTestCases`
- `google.cloud.dialogflow.cx.v3.TestCases.RunTestCase`
- `google.cloud.dialogflow.cx.v3.TestCases.UpdateTestCase`
- `google.cloud.dialogflow.cx.v3.TransitionRouteGroups.CreateTransitionRouteGroup`
- `google.cloud.dialogflow.cx.v3.TransitionRouteGroups.DeleteTransitionRouteGroup`
- `google.cloud.dialogflow.cx.v3.TransitionRouteGroups.GetTransitionRouteGroup`
- `google.cloud.dialogflow.cx.v3.TransitionRouteGroups.ListTransitionRouteGroups`
- `google.cloud.dialogflow.cx.v3.TransitionRouteGroups.UpdateTransitionRouteGroup`
- `google.cloud.dialogflow.cx.v3.Versions.CreateVersion`
- `google.cloud.dialogflow.cx.v3.Versions.DeleteVersion`
- `google.cloud.dialogflow.cx.v3.Versions.ListVersions`
- `google.cloud.dialogflow.cx.v3.Webhooks.CreateWebhook`
- `google.cloud.dialogflow.cx.v3.Webhooks.DeleteWebhook`
- `google.cloud.dialogflow.cx.v3.Webhooks.GetWebhook`
- `google.cloud.dialogflow.cx.v3.Webhooks.ListWebhooks`
- `google.cloud.dialogflow.cx.v3.Webhooks.UpdateWebhook`
- `google.cloud.dialogflow.cx.v3beta1.Agents.CreateAgent`
- `google.cloud.dialogflow.cx.v3beta1.Agents.DeleteAgent`
- `google.cloud.dialogflow.cx.v3beta1.Agents.ExportAgent`
- `google.cloud.dialogflow.cx.v3beta1.Agents.GetAgent`
- `google.cloud.dialogflow.cx.v3beta1.Agents.GetAgentValidationResult`
- `google.cloud.dialogflow.cx.v3beta1.Agents.ListAgents`
- `google.cloud.dialogflow.cx.v3beta1.Agents.RestoreAgent`
- `google.cloud.dialogflow.cx.v3beta1.Agents.UpdateAgent`
- `google.cloud.dialogflow.cx.v3beta1.Agents.ValidateAgent`
- `google.cloud.dialogflow.cx.v3beta1.Changelogs.ListChangelogs`
- `google.cloud.dialogflow.cx.v3beta1.EntityTypes.CreateEntityType`
- `google.cloud.dialogflow.cx.v3beta1.EntityTypes.GetEntityType`
- `google.cloud.dialogflow.cx.v3beta1.EntityTypes.ListEntityTypes`
- `google.cloud.dialogflow.cx.v3beta1.EntityTypes.UpdateEntityType`
- `google.cloud.dialogflow.cx.v3beta1.Environments.ListEnvironments`
- `google.cloud.dialogflow.cx.v3beta1.Environments.UpdateEnvironment`
- `google.cloud.dialogflow.cx.v3beta1.Flows.CreateFlow`
- `google.cloud.dialogflow.cx.v3beta1.Flows.GetFlow`
- `google.cloud.dialogflow.cx.v3beta1.Flows.ListFlows`
- `google.cloud.dialogflow.cx.v3beta1.Flows.TrainFlow`
- `google.cloud.dialogflow.cx.v3beta1.Flows.UpdateFlow`
- `google.cloud.dialogflow.cx.v3beta1.Intents.CreateIntent`
- `google.cloud.dialogflow.cx.v3beta1.Intents.DeleteIntent`
- `google.cloud.dialogflow.cx.v3beta1.Intents.GetIntent`
- `google.cloud.dialogflow.cx.v3beta1.Intents.ListIntents`
- `google.cloud.dialogflow.cx.v3beta1.Intents.UpdateIntent`
- `google.cloud.dialogflow.cx.v3beta1.Pages.CreatePage`
- `google.cloud.dialogflow.cx.v3beta1.Pages.GetPage`
- `google.cloud.dialogflow.cx.v3beta1.Pages.ListPages`
- `google.cloud.dialogflow.cx.v3beta1.Pages.UpdatePage`
- `google.cloud.dialogflow.cx.v3beta1.SecuritySettingsService.CreateSecuritySettings`
- `google.cloud.dialogflow.cx.v3beta1.SecuritySettingsService.DeleteSecuritySettings`
- `google.cloud.dialogflow.cx.v3beta1.SecuritySettingsService.ListSecuritySettings`
- `google.cloud.dialogflow.cx.v3beta1.SecuritySettingsService.UpdateSecuritySettings`
- `google.cloud.dialogflow.cx.v3beta1.Sessions.DetectIntent`
- `google.cloud.dialogflow.cx.v3beta1.Sessions.StreamingDetectIntent`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.BatchRunTestCases`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.CalculateCoverage`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.CreateTestCase`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.ExportTestCases`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.GetTestCase`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.ImportTestCases`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.ListTestCases`
- `google.cloud.dialogflow.cx.v3beta1.TestCases.UpdateTestCase`
- `google.cloud.dialogflow.cx.v3beta1.TransitionRouteGroups.CreateTransitionRouteGroup`
- `google.cloud.dialogflow.cx.v3beta1.TransitionRouteGroups.GetTransitionRouteGroup`
- `google.cloud.dialogflow.cx.v3beta1.TransitionRouteGroups.ListTransitionRouteGroups`
- `google.cloud.dialogflow.cx.v3beta1.TransitionRouteGroups.UpdateTransitionRouteGroup`
- `google.cloud.dialogflow.cx.v3beta1.Versions.CompareVersions`
- `google.cloud.dialogflow.cx.v3beta1.Versions.CreateVersion`
- `google.cloud.dialogflow.cx.v3beta1.Versions.DeleteVersion`
- `google.cloud.dialogflow.cx.v3beta1.Versions.GetVersion`
- `google.cloud.dialogflow.cx.v3beta1.Versions.ListVersions`
- `google.cloud.dialogflow.cx.v3beta1.Webhooks.CreateWebhook`
- `google.cloud.dialogflow.cx.v3beta1.Webhooks.ListWebhooks`
- `google.cloud.dialogflow.cx.v3beta1.Webhooks.UpdateWebhook`
- `google.cloud.dialogflow.v2.Agents.DeleteAgent`
- `google.cloud.dialogflow.v2.Agents.ExportAgent`
- `google.cloud.dialogflow.v2.Agents.GetAgent`
- `google.cloud.dialogflow.v2.Agents.GetValidationResult`
- `google.cloud.dialogflow.v2.Agents.ImportAgent`
- `google.cloud.dialogflow.v2.Agents.RestoreAgent`
- `google.cloud.dialogflow.v2.Agents.SearchAgents`
- `google.cloud.dialogflow.v2.Agents.SetAgent`
- `google.cloud.dialogflow.v2.Agents.TrainAgent`
- `google.cloud.dialogflow.v2.AnswerRecords.ListAnswerRecords`
- `google.cloud.dialogflow.v2.AnswerRecords.UpdateAnswerRecord`
- `google.cloud.dialogflow.v2.Contexts.CreateContext`
- `google.cloud.dialogflow.v2.Contexts.DeleteAllContexts`
- `google.cloud.dialogflow.v2.Contexts.DeleteContext`
- `google.cloud.dialogflow.v2.Contexts.GetContext`
- `google.cloud.dialogflow.v2.Contexts.ListContexts`
- `google.cloud.dialogflow.v2.Contexts.UpdateContext`
- `google.cloud.dialogflow.v2.ConversationModels.CreateConversationModelEvaluation`
- `google.cloud.dialogflow.v2.ConversationModels.GetConversationModelEvaluation`
- `google.cloud.dialogflow.v2.ConversationModels.ListConversationModelEvaluations`
- `google.cloud.dialogflow.v2.ConversationProfiles.ClearSuggestionFeatureConfig`
- `google.cloud.dialogflow.v2.ConversationProfiles.CreateConversationProfile`
- `google.cloud.dialogflow.v2.ConversationProfiles.DeleteConversationProfile`
- `google.cloud.dialogflow.v2.ConversationProfiles.GetConversationProfile`
- `google.cloud.dialogflow.v2.ConversationProfiles.ListConversationProfiles`
- `google.cloud.dialogflow.v2.ConversationProfiles.SetSuggestionFeatureConfig`
- `google.cloud.dialogflow.v2.ConversationProfiles.UpdateConversationProfile`
- `google.cloud.dialogflow.v2.Conversations.CompleteConversation`
- `google.cloud.dialogflow.v2.Conversations.CreateConversation`
- `google.cloud.dialogflow.v2.Conversations.GetConversation`
- `google.cloud.dialogflow.v2.Conversations.ListConversations`
- `google.cloud.dialogflow.v2.Conversations.ListMessages`
- `google.cloud.dialogflow.v2.Documents.CreateDocument`
- `google.cloud.dialogflow.v2.Documents.DeleteDocument`
- `google.cloud.dialogflow.v2.Documents.GetDocument`
- `google.cloud.dialogflow.v2.Documents.ImportDocuments`
- `google.cloud.dialogflow.v2.Documents.ListDocuments`
- `google.cloud.dialogflow.v2.Documents.ReloadDocument`
- `google.cloud.dialogflow.v2.Documents.UpdateDocument`
- `google.cloud.dialogflow.v2.EntityTypes.BatchCreateEntities`
- `google.cloud.dialogflow.v2.EntityTypes.BatchDeleteEntities`
- `google.cloud.dialogflow.v2.EntityTypes.BatchDeleteEntityTypes`
- `google.cloud.dialogflow.v2.EntityTypes.BatchUpdateEntities`
- `google.cloud.dialogflow.v2.EntityTypes.BatchUpdateEntityTypes`
- `google.cloud.dialogflow.v2.EntityTypes.CreateEntityType`
- `google.cloud.dialogflow.v2.EntityTypes.DeleteEntityType`
- `google.cloud.dialogflow.v2.EntityTypes.GetEntityType`
- `google.cloud.dialogflow.v2.EntityTypes.ListEntityTypes`
- `google.cloud.dialogflow.v2.EntityTypes.UpdateEntityType`
- `google.cloud.dialogflow.v2.Environments.CreateEnvironment`
- `google.cloud.dialogflow.v2.Environments.DeleteEnvironment`
- `google.cloud.dialogflow.v2.Environments.GetEnvironment`
- `google.cloud.dialogflow.v2.Environments.GetEnvironmentHistory`
- `google.cloud.dialogflow.v2.Environments.ListEnvironments`
- `google.cloud.dialogflow.v2.Environments.UpdateEnvironment`
- `google.cloud.dialogflow.v2.Fulfillments.GetFulfillment`
- `google.cloud.dialogflow.v2.Fulfillments.UpdateFulfillment`
- `google.cloud.dialogflow.v2.Intents.BatchDeleteIntents`
- `google.cloud.dialogflow.v2.Intents.BatchUpdateIntents`
- `google.cloud.dialogflow.v2.Intents.CreateIntent`
- `google.cloud.dialogflow.v2.Intents.DeleteIntent`
- `google.cloud.dialogflow.v2.Intents.GetIntent`
- `google.cloud.dialogflow.v2.Intents.ListIntents`
- `google.cloud.dialogflow.v2.Intents.UpdateIntent`
- `google.cloud.dialogflow.v2.KnowledgeBases.CreateKnowledgeBase`
- `google.cloud.dialogflow.v2.KnowledgeBases.DeleteKnowledgeBase`
- `google.cloud.dialogflow.v2.KnowledgeBases.GetKnowledgeBase`
- `google.cloud.dialogflow.v2.KnowledgeBases.ListKnowledgeBases`
- `google.cloud.dialogflow.v2.KnowledgeBases.UpdateKnowledgeBase`
- `google.cloud.dialogflow.v2.Participants.AnalyzeContent`
- `google.cloud.dialogflow.v2.Participants.CreateParticipant`
- `google.cloud.dialogflow.v2.Participants.GetParticipant`
- `google.cloud.dialogflow.v2.Participants.ListParticipants`
- `google.cloud.dialogflow.v2.Participants.StreamingAnalyzeContent`
- `google.cloud.dialogflow.v2.Participants.SuggestArticles`
- `google.cloud.dialogflow.v2.Participants.SuggestFaqAnswers`
- `google.cloud.dialogflow.v2.Participants.SuggestSmartReplies`
- `google.cloud.dialogflow.v2.Participants.UpdateParticipant`
- `google.cloud.dialogflow.v2.SessionEntityTypes.CreateSessionEntityType`
- `google.cloud.dialogflow.v2.SessionEntityTypes.DeleteSessionEntityType`
- `google.cloud.dialogflow.v2.SessionEntityTypes.GetSessionEntityType`
- `google.cloud.dialogflow.v2.SessionEntityTypes.ListSessionEntityTypes`
- `google.cloud.dialogflow.v2.SessionEntityTypes.UpdateSessionEntityType`
- `google.cloud.dialogflow.v2.Sessions.DetectIntent`
- `google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent`
- `google.cloud.dialogflow.v2.Versions.CreateVersion`
- `google.cloud.dialogflow.v2.Versions.DeleteVersion`
- `google.cloud.dialogflow.v2.Versions.GetVersion`
- `google.cloud.dialogflow.v2.Versions.ListVersions`
- `google.cloud.dialogflow.v2.Versions.UpdateVersion`
- `google.cloud.dialogflow.v2beta1.Agents.DeleteAgent`
- `google.cloud.dialogflow.v2beta1.Agents.ExportAgent`
- `google.cloud.dialogflow.v2beta1.Agents.GetAgent`
- `google.cloud.dialogflow.v2beta1.Agents.GetAgentSettings`
- `google.cloud.dialogflow.v2beta1.Agents.GetValidationResult`
- `google.cloud.dialogflow.v2beta1.Agents.ImportAgent`
- `google.cloud.dialogflow.v2beta1.Agents.RestoreAgent`
- `google.cloud.dialogflow.v2beta1.Agents.SearchAgents`
- `google.cloud.dialogflow.v2beta1.Agents.SetAgent`
- `google.cloud.dialogflow.v2beta1.Agents.TrainAgent`
- `google.cloud.dialogflow.v2beta1.Agents.UpdateAgent`
- `google.cloud.dialogflow.v2beta1.Agents.UpdateAgentSettings`
- `google.cloud.dialogflow.v2beta1.Analytics.ListAnalytics`
- `google.cloud.dialogflow.v2beta1.AnswerRecords.GetAnswerRecord`
- `google.cloud.dialogflow.v2beta1.AnswerRecords.ListAnswerRecords`
- `google.cloud.dialogflow.v2beta1.AnswerRecords.UpdateAnswerRecord`
- `google.cloud.dialogflow.v2beta1.AogService.DetermineAogCompatibility`
- `google.cloud.dialogflow.v2beta1.AogService.ListAogIntentDefinitions`
- `google.cloud.dialogflow.v2beta1.AogService.PreviewActionPackage`
- `google.cloud.dialogflow.v2beta1.AogService.PreviewAogAgent`
- `google.cloud.dialogflow.v2beta1.Contexts.CreateContext`
- `google.cloud.dialogflow.v2beta1.Contexts.DeleteAllContexts`
- `google.cloud.dialogflow.v2beta1.Contexts.DeleteContext`
- `google.cloud.dialogflow.v2beta1.Contexts.GetContext`
- `google.cloud.dialogflow.v2beta1.Contexts.ListContexts`
- `google.cloud.dialogflow.v2beta1.Contexts.UpdateContext`
- `google.cloud.dialogflow.v2beta1.ConversationModels.CreateConversationModelEvaluation`
- `google.cloud.dialogflow.v2beta1.ConversationModels.ListConversationModelEvaluations`
- `google.cloud.dialogflow.v2beta1.ConversationProfiles.ClearSuggestionFeatureConfig`
- `google.cloud.dialogflow.v2beta1.ConversationProfiles.CreateConversationProfile`
- `google.cloud.dialogflow.v2beta1.ConversationProfiles.DeleteConversationProfile`
- `google.cloud.dialogflow.v2beta1.ConversationProfiles.GetConversationProfile`
- `google.cloud.dialogflow.v2beta1.ConversationProfiles.ListConversationProfiles`
- `google.cloud.dialogflow.v2beta1.ConversationProfiles.SetSuggestionFeatureConfig`
- `google.cloud.dialogflow.v2beta1.ConversationProfiles.UpdateConversationProfile`
- `google.cloud.dialogflow.v2beta1.Conversations.BatchCreateMessages`
- `google.cloud.dialogflow.v2beta1.Conversations.CompleteConversation`
- `google.cloud.dialogflow.v2beta1.Conversations.CreateCallMatcher`
- `google.cloud.dialogflow.v2beta1.Conversations.CreateConversation`
- `google.cloud.dialogflow.v2beta1.Conversations.DeactivateConversation`
- `google.cloud.dialogflow.v2beta1.Conversations.ExportMessages`
- `google.cloud.dialogflow.v2beta1.Conversations.GetConversation`
- `google.cloud.dialogflow.v2beta1.Conversations.ListConversations`
- `google.cloud.dialogflow.v2beta1.Conversations.ListMessages`
- `google.cloud.dialogflow.v2beta1.Conversations.UpdateConversation`
- `google.cloud.dialogflow.v2beta1.Documents.AutoApproveSmartMessagingEntries`
- `google.cloud.dialogflow.v2beta1.Documents.BatchUpdateQuestionAnswerEntries`
- `google.cloud.dialogflow.v2beta1.Documents.BatchUpdateSmartMessagingEntries`
- `google.cloud.dialogflow.v2beta1.Documents.CreateDocument`
- `google.cloud.dialogflow.v2beta1.Documents.DeleteDocument`
- `google.cloud.dialogflow.v2beta1.Documents.DisableSmartMessagingEntries`
- `google.cloud.dialogflow.v2beta1.Documents.EnableSmartMessagingEntries`
- `google.cloud.dialogflow.v2beta1.Documents.GetDocument`
- `google.cloud.dialogflow.v2beta1.Documents.ImportDocuments`
- `google.cloud.dialogflow.v2beta1.Documents.ListDocuments`
- `google.cloud.dialogflow.v2beta1.Documents.ListQuestionAnswerEntries`
- `google.cloud.dialogflow.v2beta1.Documents.ListSmartMessagingEntries`
- `google.cloud.dialogflow.v2beta1.Documents.ReloadDocument`
- `google.cloud.dialogflow.v2beta1.Documents.UpdateDocument`
- `google.cloud.dialogflow.v2beta1.EntityTypes.BatchCopyEntityTypes`
- `google.cloud.dialogflow.v2beta1.EntityTypes.BatchCreateEntities`
- `google.cloud.dialogflow.v2beta1.EntityTypes.BatchDeleteEntities`
- `google.cloud.dialogflow.v2beta1.EntityTypes.BatchDeleteEntityTypes`
- `google.cloud.dialogflow.v2beta1.EntityTypes.BatchMoveEntityTypes`
- `google.cloud.dialogflow.v2beta1.EntityTypes.BatchUpdateEntities`
- `google.cloud.dialogflow.v2beta1.EntityTypes.BatchUpdateEntityTypes`
- `google.cloud.dialogflow.v2beta1.EntityTypes.CreateEntityType`
- `google.cloud.dialogflow.v2beta1.EntityTypes.DeleteEntityType`
- `google.cloud.dialogflow.v2beta1.EntityTypes.GetEntityType`
- `google.cloud.dialogflow.v2beta1.EntityTypes.ListEntityTypes`
- `google.cloud.dialogflow.v2beta1.EntityTypes.UpdateEntityType`
- `google.cloud.dialogflow.v2beta1.Environments.CreateEnvironment`
- `google.cloud.dialogflow.v2beta1.Environments.DeleteEnvironment`
- `google.cloud.dialogflow.v2beta1.Environments.GetEnvironment`
- `google.cloud.dialogflow.v2beta1.Environments.GetEnvironmentHistory`
- `google.cloud.dialogflow.v2beta1.Environments.ListEnvironments`
- `google.cloud.dialogflow.v2beta1.Environments.UpdateEnvironment`
- `google.cloud.dialogflow.v2beta1.Fulfillments.GetFulfillment`
- `google.cloud.dialogflow.v2beta1.Fulfillments.UpdateFulfillment`
- `google.cloud.dialogflow.v2beta1.Integrations.FinalizeIntegration`
- `google.cloud.dialogflow.v2beta1.Integrations.GetIntegration`
- `google.cloud.dialogflow.v2beta1.Integrations.ListIntegrations`
- `google.cloud.dialogflow.v2beta1.Integrations.RemoveIntegration`
- `google.cloud.dialogflow.v2beta1.Integrations.SignupIntegration`
- `google.cloud.dialogflow.v2beta1.Integrations.StartIntegration`
- `google.cloud.dialogflow.v2beta1.Integrations.StopIntegration`
- `google.cloud.dialogflow.v2beta1.Intents.AnnotateTrainingPhrase`
- `google.cloud.dialogflow.v2beta1.Intents.BatchCopyIntents`
- `google.cloud.dialogflow.v2beta1.Intents.BatchDeleteIntents`
- `google.cloud.dialogflow.v2beta1.Intents.BatchMoveIntents`
- `google.cloud.dialogflow.v2beta1.Intents.BatchUpdateIntents`
- `google.cloud.dialogflow.v2beta1.Intents.CreateIntent`
- `google.cloud.dialogflow.v2beta1.Intents.DeleteIntent`
- `google.cloud.dialogflow.v2beta1.Intents.GetIntent`
- `google.cloud.dialogflow.v2beta1.Intents.ListIntents`
- `google.cloud.dialogflow.v2beta1.Intents.SearchKnowledgeBaseIntent`
- `google.cloud.dialogflow.v2beta1.Intents.UpdateIntent`
- `google.cloud.dialogflow.v2beta1.IssueModelService.ListIssueModelingEntries`
- `google.cloud.dialogflow.v2beta1.KnowledgeBases.CreateKnowledgeBase`
- `google.cloud.dialogflow.v2beta1.KnowledgeBases.DeleteKnowledgeBase`
- `google.cloud.dialogflow.v2beta1.KnowledgeBases.GetKnowledgeBase`
- `google.cloud.dialogflow.v2beta1.KnowledgeBases.ListKnowledgeBases`
- `google.cloud.dialogflow.v2beta1.KnowledgeBases.UpdateKnowledgeBase`
- `google.cloud.dialogflow.v2beta1.ModelEvaluations.GetModelEvaluationResult`
- `google.cloud.dialogflow.v2beta1.Participants.AnalyzeContent`
- `google.cloud.dialogflow.v2beta1.Participants.BatchCreateParticipants`
- `google.cloud.dialogflow.v2beta1.Participants.CompileSuggestion`
- `google.cloud.dialogflow.v2beta1.Participants.CreateParticipant`
- `google.cloud.dialogflow.v2beta1.Participants.GetParticipant`
- `google.cloud.dialogflow.v2beta1.Participants.ListParticipants`
- `google.cloud.dialogflow.v2beta1.Participants.ListSuggestions`
- `google.cloud.dialogflow.v2beta1.Participants.StreamingAnalyzeContent`
- `google.cloud.dialogflow.v2beta1.Participants.SuggestArticles`
- `google.cloud.dialogflow.v2beta1.Participants.SuggestFaqAnswers`
- `google.cloud.dialogflow.v2beta1.Participants.SuggestSmartComposeAnswers`
- `google.cloud.dialogflow.v2beta1.Participants.SuggestSmartReplies`
- `google.cloud.dialogflow.v2beta1.Participants.SuggestSpellGrammarCorrectionAnswers`
- `google.cloud.dialogflow.v2beta1.Participants.UpdateParticipant`
- `google.cloud.dialogflow.v2beta1.PhoneNumberOrders.CreatePhoneNumberLease`
- `google.cloud.dialogflow.v2beta1.PhoneNumberOrders.CreatePhoneNumberOrder`
- `google.cloud.dialogflow.v2beta1.PhoneNumberOrders.ListPhoneNumberOrders`
- `google.cloud.dialogflow.v2beta1.PhoneNumberOrders.UpgradePhoneNumberLease`
- `google.cloud.dialogflow.v2beta1.PhoneNumbers.DeletePhoneNumber`
- `google.cloud.dialogflow.v2beta1.PhoneNumbers.ListPhoneNumbers`
- `google.cloud.dialogflow.v2beta1.PhoneNumbers.UpdatePhoneNumber`
- `google.cloud.dialogflow.v2beta1.SecuritySettingsService.GetSecuritySettings`
- `google.cloud.dialogflow.v2beta1.SecuritySettingsService.UpdateSecuritySettings`
- `google.cloud.dialogflow.v2beta1.SessionEntityTypes.CreateSessionEntityType`
- `google.cloud.dialogflow.v2beta1.SessionEntityTypes.DeleteSessionEntityType`
- `google.cloud.dialogflow.v2beta1.SessionEntityTypes.GetSessionEntityType`
- `google.cloud.dialogflow.v2beta1.SessionEntityTypes.ListSessionEntityTypes`
- `google.cloud.dialogflow.v2beta1.SessionEntityTypes.UpdateSessionEntityType`
- `google.cloud.dialogflow.v2beta1.SessionHistory.DeleteSessionConversation`
- `google.cloud.dialogflow.v2beta1.SessionHistory.ListInteractions`
- `google.cloud.dialogflow.v2beta1.SessionHistory.SearchSessionConversations`
- `google.cloud.dialogflow.v2beta1.SessionHistory.UpdateSessionConversation`
- `google.cloud.dialogflow.v2beta1.Sessions.DetectIntent`
- `google.cloud.dialogflow.v2beta1.Sessions.MatchIntent`
- `google.cloud.dialogflow.v2beta1.Sessions.StreamingDetectIntent`
- `google.cloud.dialogflow.v2beta1.SmallTalk.GetSmallTalkConfig`
- `google.cloud.dialogflow.v2beta1.SmallTalk.UpdateSmallTalkConfig`
- `google.cloud.dialogflow.v2beta1.Versions.CreateVersion`
- `google.cloud.dialogflow.v2beta1.Versions.DeleteVersion`
- `google.cloud.dialogflow.v2beta1.Versions.GetVersion`
- `google.cloud.dialogflow.v2beta1.Versions.ListVersions`
- `google.cloud.dialogflow.v2beta1.Versions.UpdateVersion`
- `google.cloud.location.Locations.GetLocation`
- `google.cloud.location.Locations.ListLocations`
- `google.longrunning.Operations.GetOperation`

### Cloud Data Loss Prevention

#### `serviceName`

- `dlp.googleapis.com`

#### `methodName`

- `google.privacy.dlp.v2.DlpService.ActivateJobTrigger`
- `google.privacy.dlp.v2.DlpService.CancelDlpJob`
- `google.privacy.dlp.v2.DlpService.CreateDeidentifyTemplate`
- `google.privacy.dlp.v2.DlpService.CreateDlpJob`
- `google.privacy.dlp.v2.DlpService.CreateInspectTemplate`
- `google.privacy.dlp.v2.DlpService.CreateJobTrigger`
- `google.privacy.dlp.v2.DlpService.CreateStoredInfoType`
- `google.privacy.dlp.v2.DlpService.DeidentifyContent`
- `google.privacy.dlp.v2.DlpService.DeleteDeidentifyTemplate`
- `google.privacy.dlp.v2.DlpService.DeleteDlpJob`
- `google.privacy.dlp.v2.DlpService.DeleteInspectTemplate`
- `google.privacy.dlp.v2.DlpService.DeleteJobTrigger`
- `google.privacy.dlp.v2.DlpService.DeleteStoredInfoType`
- `google.privacy.dlp.v2.DlpService.FinishDlpJob`
- `google.privacy.dlp.v2.DlpService.GetDeidentifyTemplate`
- `google.privacy.dlp.v2.DlpService.GetDlpJob`
- `google.privacy.dlp.v2.DlpService.GetInspectTemplate`
- `google.privacy.dlp.v2.DlpService.GetJobTrigger`
- `google.privacy.dlp.v2.DlpService.GetStoredInfoType`
- `google.privacy.dlp.v2.DlpService.HybridInspectDlpJob`
- `google.privacy.dlp.v2.DlpService.HybridInspectJobTrigger`
- `google.privacy.dlp.v2.DlpService.InspectContent`
- `google.privacy.dlp.v2.DlpService.ListDeidentifyTemplates`
- `google.privacy.dlp.v2.DlpService.ListDlpJobs`
- `google.privacy.dlp.v2.DlpService.ListInspectTemplates`
- `google.privacy.dlp.v2.DlpService.ListJobTriggers`
- `google.privacy.dlp.v2.DlpService.ListStoredInfoTypes`
- `google.privacy.dlp.v2.DlpService.ReidentifyContent`
- `google.privacy.dlp.v2.DlpService.UpdateDeidentifyTemplate`
- `google.privacy.dlp.v2.DlpService.UpdateInspectTemplate`
- `google.privacy.dlp.v2.DlpService.UpdateJobTrigger`
- `google.privacy.dlp.v2.DlpService.UpdateStoredInfoType`

### Cloud DNS

#### `serviceName`

- `dns.googleapis.com`

#### `methodName`

- `dns.changes.create`
- `dns.changes.get`
- `dns.changes.list`
- `dns.managedZones.create`
- `dns.managedZones.delete`
- `dns.managedZones.get`
- `dns.managedZones.list`
- `dns.managedZones.patch`
- `dns.managedZones.update`
- `dns.policies.create`
- `dns.policies.delete`
- `dns.policies.get`
- `dns.policies.list`
- `dns.policies.patch`
- `dns.policies.update`
- `dns.projects.get`
- `dns.responsePolicies.create`
- `dns.responsePolicies.delete`
- `dns.responsePolicies.get`
- `dns.responsePolicies.list`
- `dns.responsePolicies.patch`
- `dns.responsePolicies.update`
- `dns.responsePolicyRules.create`
- `dns.responsePolicyRules.delete`
- `dns.responsePolicyRules.get`
- `dns.responsePolicyRules.list`
- `dns.responsePolicyRules.patch`
- `dns.responsePolicyRules.update`

### Google Domains

#### `serviceName`

- `domains.googleapis.com`

#### `methodName`

- `SetIamPolicy`
- `google.cloud.domains.v1.Domains.ConfigureContactSettings`
- `google.cloud.domains.v1.Domains.ConfigureDnsSettings`
- `google.cloud.domains.v1.Domains.ConfigureManagementSettings`
- `google.cloud.domains.v1.Domains.DeleteRegistration`
- `google.cloud.domains.v1.Domains.ExportRegistration`
- `google.cloud.domains.v1.Domains.GetRegistration`
- `google.cloud.domains.v1.Domains.ListRegistrations`
- `google.cloud.domains.v1.Domains.RegisterDomain`
- `google.cloud.domains.v1.Domains.ResetAuthorizationCode`
- `google.cloud.domains.v1.Domains.RetrieveAuthorizationCode`
- `google.cloud.domains.v1.Domains.RetrieveRegisterParameters`
- `google.cloud.domains.v1.Domains.RetrieveTransferParameters`
- `google.cloud.domains.v1.Domains.SearchDomains`
- `google.cloud.domains.v1.Domains.TransferDomain`
- `google.cloud.domains.v1.Domains.UpdateRegistration`
- `google.cloud.domains.v1beta1.Domains.ConfigureContactSettings`
- `google.cloud.domains.v1beta1.Domains.ConfigureDnsSettings`
- `google.cloud.domains.v1beta1.Domains.ConfigureManagementSettings`
- `google.cloud.domains.v1beta1.Domains.DeleteRegistration`
- `google.cloud.domains.v1beta1.Domains.ExportRegistration`
- `google.cloud.domains.v1beta1.Domains.GetRegistration`
- `google.cloud.domains.v1beta1.Domains.ListRegistrations`
- `google.cloud.domains.v1beta1.Domains.RegisterDomain`
- `google.cloud.domains.v1beta1.Domains.ResetAuthorizationCode`
- `google.cloud.domains.v1beta1.Domains.RetrieveAuthorizationCode`
- `google.cloud.domains.v1beta1.Domains.TransferDomain`
- `google.cloud.domains.v1beta1.Domains.UpdateRegistration`
- `google.longrunning.Operations.GetOperation`

### Essential Contacts

#### `serviceName`

- `essentialcontacts.googleapis.com`

#### `methodName`

- `google.cloud.essentialcontacts.v1.EssentialContactsService.ComputeContacts`
- `google.cloud.essentialcontacts.v1.EssentialContactsService.CreateContact`
- `google.cloud.essentialcontacts.v1.EssentialContactsService.DeleteContact`
- `google.cloud.essentialcontacts.v1.EssentialContactsService.GetContact`
- `google.cloud.essentialcontacts.v1.EssentialContactsService.ListContacts`
- `google.cloud.essentialcontacts.v1.EssentialContactsService.UpdateContact`
- `google.cloud.essentialcontacts.v1beta1.EssentialContactsService.ComputeContacts`
- `google.cloud.essentialcontacts.v1beta1.EssentialContactsService.CreateContact`
- `google.cloud.essentialcontacts.v1beta1.EssentialContactsService.DeleteContact`
- `google.cloud.essentialcontacts.v1beta1.EssentialContactsService.GetContact`
- `google.cloud.essentialcontacts.v1beta1.EssentialContactsService.ListContacts`
- `google.cloud.essentialcontacts.v1beta1.EssentialContactsService.SendTestMessage`
- `google.cloud.essentialcontacts.v1beta1.EssentialContactsService.UpdateContact`

### Eventarc

#### `serviceName`

- `eventarc.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.eventarc.v1.Eventarc.CreateChannel`
- `google.cloud.eventarc.v1.Eventarc.CreateTrigger`
- `google.cloud.eventarc.v1.Eventarc.DeleteTrigger`
- `google.cloud.eventarc.v1.Eventarc.GetTrigger`
- `google.cloud.eventarc.v1.Eventarc.ListTriggers`
- `google.cloud.eventarc.v1.Eventarc.UpdateTrigger`
- `google.cloud.eventarc.v1beta1.Eventarc.CreateTrigger`
- `google.cloud.eventarc.v1beta1.Eventarc.DeleteTrigger`
- `google.cloud.eventarc.v1beta1.Eventarc.GetTrigger`
- `google.cloud.eventarc.v1beta1.Eventarc.ListTriggers`
- `google.cloud.eventarc.v1beta1.Eventarc.UpdateTrigger`

### Cloud Filestore

#### `serviceName`

- `file.googleapis.com`

#### `methodName`

- `google.cloud.filestore.v1.CloudFilestoreManager.CreateBackup`
- `google.cloud.filestore.v1.CloudFilestoreManager.CreateInstance`
- `google.cloud.filestore.v1.CloudFilestoreManager.CreateSnapshot`
- `google.cloud.filestore.v1.CloudFilestoreManager.DeleteBackup`
- `google.cloud.filestore.v1.CloudFilestoreManager.DeleteInstance`
- `google.cloud.filestore.v1.CloudFilestoreManager.DeleteSnapshot`
- `google.cloud.filestore.v1.CloudFilestoreManager.GetBackup`
- `google.cloud.filestore.v1.CloudFilestoreManager.GetInstance`
- `google.cloud.filestore.v1.CloudFilestoreManager.GetSnapshot`
- `google.cloud.filestore.v1.CloudFilestoreManager.ListBackups`
- `google.cloud.filestore.v1.CloudFilestoreManager.ListInstances`
- `google.cloud.filestore.v1.CloudFilestoreManager.ListSnapshots`
- `google.cloud.filestore.v1.CloudFilestoreManager.RestoreInstance`
- `google.cloud.filestore.v1.CloudFilestoreManager.UpdateBackup`
- `google.cloud.filestore.v1.CloudFilestoreManager.UpdateInstance`
- `google.cloud.filestore.v1.CloudFilestoreManager.UpdateSnapshot`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateBackup`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateInstance`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateSnapshot`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteBackup`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteInstance`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteSnapshot`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.GetBackup`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.GetInstance`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.GetSnapshot`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.ListBackups`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.ListInstances`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.ListSnapshots`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.RestoreInstance`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.RevertInstance`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateBackup`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateInstance`
- `google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateSnapshot`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`

### Cloud Firebase

#### `serviceName`

- `firebase.googleapis.com`

#### `methodName`

- `google.firebase.service.v1beta1.AndroidAppService.CreateAndroidApp`
- `google.firebase.service.v1beta1.AndroidAppService.CreateShaCertificate`
- `google.firebase.service.v1beta1.AndroidAppService.DeleteShaCertificate`
- `google.firebase.service.v1beta1.AndroidAppService.GetAndroidApp`
- `google.firebase.service.v1beta1.AndroidAppService.GetAndroidAppConfig`
- `google.firebase.service.v1beta1.AndroidAppService.ListAndroidApps`
- `google.firebase.service.v1beta1.AndroidAppService.ListShaCertificates`
- `google.firebase.service.v1beta1.AndroidAppService.UpdateAndroidApp`
- `google.firebase.service.v1beta1.FirebaseAnalyticsService.AddGoogleAnalytics`
- `google.firebase.service.v1beta1.FirebaseProjectService.AddFirebase`
- `google.firebase.service.v1beta1.FirebaseProjectService.FinalizeDefaultLocation`
- `google.firebase.service.v1beta1.FirebaseProjectService.GetAdminSdkConfig`
- `google.firebase.service.v1beta1.FirebaseProjectService.GetFirebaseProject`
- `google.firebase.service.v1beta1.FirebaseProjectService.ListAvailableLocations`
- `google.firebase.service.v1beta1.FirebaseProjectService.SearchFirebaseApps`
- `google.firebase.service.v1beta1.FirebaseProjectService.UpdateFirebaseProject`
- `google.firebase.service.v1beta1.IosAppService.CreateIosApp`
- `google.firebase.service.v1beta1.IosAppService.GetIosApp`
- `google.firebase.service.v1beta1.IosAppService.GetIosAppConfig`
- `google.firebase.service.v1beta1.IosAppService.ListIosApps`
- `google.firebase.service.v1beta1.IosAppService.UpdateIosApp`
- `google.firebase.service.v1beta1.WebAppService.CreateWebApp`
- `google.firebase.service.v1beta1.WebAppService.GetWebApp`
- `google.firebase.service.v1beta1.WebAppService.GetWebAppConfig`
- `google.firebase.service.v1beta1.WebAppService.ListWebApps`
- `google.firebase.service.v1beta1.WebAppService.UpdateWebApp`
- `google.longrunning.FiredataOperations.GetOperation`

### Firebase Realtime Database

#### `serviceName`

- `firebasedatabase.googleapis.com`

#### `methodName`

- `-`
- `google.firebase.database.v1beta.RealtimeDatabaseService.CreateDatabaseInstance`
- `google.firebase.database.v1beta.RealtimeDatabaseService.DeleteDatabaseInstance`
- `google.firebase.database.v1beta.RealtimeDatabaseService.DisableDatabaseInstance`
- `google.firebase.database.v1beta.RealtimeDatabaseService.GetDatabaseInstance`
- `google.firebase.database.v1beta.RealtimeDatabaseService.ListDatabaseInstances`
- `google.firebase.database.v1beta.RealtimeDatabaseService.ReenableDatabaseInstance`
- `google.firebase.database.v1beta.RealtimeDatabaseService.UndeleteDatabaseInstance`

### Firebase Storage

#### `serviceName`

- `firebasestorage.googleapis.com`

#### `methodName`

- `google.firebase.storage.controlplane.v1beta.FirebaseStorageService.AddFirebase`
- `google.firebase.storage.controlplane.v1beta.FirebaseStorageService.ListBuckets`
- `google.firebase.storage.controlplane.v1beta.FirebaseStorageService.RemoveFirebase`

### Cloud Firestore

#### `serviceName`

- `firestore.googleapis.com`

#### `methodName`

- `google.cloud.location.Locations.GetLocation`
- `google.cloud.location.Locations.ListLocations`
- `google.firestore.admin.v1.FirestoreAdmin.CreateIndex`
- `google.firestore.admin.v1.FirestoreAdmin.DeleteIndex`
- `google.firestore.admin.v1.FirestoreAdmin.ExportDocuments`
- `google.firestore.admin.v1.FirestoreAdmin.GetDatabase`
- `google.firestore.admin.v1.FirestoreAdmin.GetField`
- `google.firestore.admin.v1.FirestoreAdmin.GetIndex`
- `google.firestore.admin.v1.FirestoreAdmin.ImportDocuments`
- `google.firestore.admin.v1.FirestoreAdmin.ListDatabases`
- `google.firestore.admin.v1.FirestoreAdmin.ListFields`
- `google.firestore.admin.v1.FirestoreAdmin.ListIndexes`
- `google.firestore.admin.v1.FirestoreAdmin.UpdateDatabase`
- `google.firestore.admin.v1.FirestoreAdmin.UpdateField`
- `google.firestore.admin.v1beta1.FirestoreAdmin.CreateIndex`
- `google.firestore.admin.v1beta1.FirestoreAdmin.DeleteIndex`
- `google.firestore.admin.v1beta1.FirestoreAdmin.ExportDocuments`
- `google.firestore.admin.v1beta1.FirestoreAdmin.GetIndex`
- `google.firestore.admin.v1beta1.FirestoreAdmin.ImportDocuments`
- `google.firestore.admin.v1beta1.FirestoreAdmin.ListIndexes`
- `google.firestore.admin.v1beta2.FirestoreAdmin.CreateIndex`
- `google.firestore.admin.v1beta2.FirestoreAdmin.DeleteIndex`
- `google.firestore.admin.v1beta2.FirestoreAdmin.ExportDocuments`
- `google.firestore.admin.v1beta2.FirestoreAdmin.GetField`
- `google.firestore.admin.v1beta2.FirestoreAdmin.GetIndex`
- `google.firestore.admin.v1beta2.FirestoreAdmin.ImportDocuments`
- `google.firestore.admin.v1beta2.FirestoreAdmin.ListFields`
- `google.firestore.admin.v1beta2.FirestoreAdmin.ListIndexes`
- `google.firestore.admin.v1beta2.FirestoreAdmin.UpdateField`
- `google.firestore.v1.Firestore.BatchGetDocuments`
- `google.firestore.v1.Firestore.BatchWrite`
- `google.firestore.v1.Firestore.BeginTransaction`
- `google.firestore.v1.Firestore.Commit`
- `google.firestore.v1.Firestore.CreateDocument`
- `google.firestore.v1.Firestore.DeleteDocument`
- `google.firestore.v1.Firestore.GetDocument`
- `google.firestore.v1.Firestore.ListCollectionIds`
- `google.firestore.v1.Firestore.ListDocuments`
- `google.firestore.v1.Firestore.Listen`
- `google.firestore.v1.Firestore.PartitionQuery`
- `google.firestore.v1.Firestore.Rollback`
- `google.firestore.v1.Firestore.RunQuery`
- `google.firestore.v1.Firestore.UpdateDocument`
- `google.firestore.v1.Firestore.Write`
- `google.firestore.v1beta1.Firestore.BatchGetDocuments`
- `google.firestore.v1beta1.Firestore.BatchWrite`
- `google.firestore.v1beta1.Firestore.BeginTransaction`
- `google.firestore.v1beta1.Firestore.Commit`
- `google.firestore.v1beta1.Firestore.CreateDocument`
- `google.firestore.v1beta1.Firestore.DeleteDocument`
- `google.firestore.v1beta1.Firestore.GetDocument`
- `google.firestore.v1beta1.Firestore.ListCollectionIds`
- `google.firestore.v1beta1.Firestore.ListDocuments`
- `google.firestore.v1beta1.Firestore.PartitionQuery`
- `google.firestore.v1beta1.Firestore.Rollback`
- `google.firestore.v1beta1.Firestore.RunQuery`
- `google.firestore.v1beta1.Firestore.UpdateDocument`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud Gaming

#### `serviceName`

- `gameservices.googleapis.com`

#### `methodName`

- `SetIamPolicy`
- `google.cloud.gaming.v1.GameServerClustersService.CreateGameServerCluster`
- `google.cloud.gaming.v1.GameServerClustersService.DeleteGameServerCluster`
- `google.cloud.gaming.v1.GameServerClustersService.GetGameServerCluster`
- `google.cloud.gaming.v1.GameServerClustersService.ListGameServerClusters`
- `google.cloud.gaming.v1.GameServerClustersService.PreviewCreateGameServerCluster`
- `google.cloud.gaming.v1.GameServerClustersService.PreviewDeleteGameServerCluster`
- `google.cloud.gaming.v1.GameServerClustersService.PreviewUpdateGameServerCluster`
- `google.cloud.gaming.v1.GameServerClustersService.UpdateGameServerCluster`
- `google.cloud.gaming.v1.GameServerConfigsService.CreateGameServerConfig`
- `google.cloud.gaming.v1.GameServerConfigsService.DeleteGameServerConfig`
- `google.cloud.gaming.v1.GameServerConfigsService.GetGameServerConfig`
- `google.cloud.gaming.v1.GameServerConfigsService.ListGameServerConfigs`
- `google.cloud.gaming.v1.GameServerDeploymentsService.CreateGameServerDeployment`
- `google.cloud.gaming.v1.GameServerDeploymentsService.DeleteGameServerDeployment`
- `google.cloud.gaming.v1.GameServerDeploymentsService.FetchDeploymentState`
- `google.cloud.gaming.v1.GameServerDeploymentsService.GetGameServerDeployment`
- `google.cloud.gaming.v1.GameServerDeploymentsService.GetGameServerDeploymentRollout`
- `google.cloud.gaming.v1.GameServerDeploymentsService.ListGameServerDeployments`
- `google.cloud.gaming.v1.GameServerDeploymentsService.PreviewGameServerDeploymentRollout`
- `google.cloud.gaming.v1.GameServerDeploymentsService.UpdateGameServerDeployment`
- `google.cloud.gaming.v1.GameServerDeploymentsService.UpdateGameServerDeploymentRollout`
- `google.cloud.gaming.v1.RealmsService.CreateRealm`
- `google.cloud.gaming.v1.RealmsService.DeleteRealm`
- `google.cloud.gaming.v1.RealmsService.GetRealm`
- `google.cloud.gaming.v1.RealmsService.ListRealms`
- `google.cloud.gaming.v1.RealmsService.PreviewRealmUpdate`
- `google.cloud.gaming.v1.RealmsService.UpdateRealm`
- `google.cloud.gaming.v1beta.GameServerClustersService.CreateGameServerCluster`
- `google.cloud.gaming.v1beta.GameServerClustersService.DeleteGameServerCluster`
- `google.cloud.gaming.v1beta.GameServerClustersService.GetGameServerCluster`
- `google.cloud.gaming.v1beta.GameServerClustersService.ListGameServerClusters`
- `google.cloud.gaming.v1beta.GameServerClustersService.PreviewCreateGameServerCluster`
- `google.cloud.gaming.v1beta.GameServerClustersService.PreviewDeleteGameServerCluster`
- `google.cloud.gaming.v1beta.GameServerClustersService.PreviewUpdateGameServerCluster`
- `google.cloud.gaming.v1beta.GameServerClustersService.UpdateGameServerCluster`
- `google.cloud.gaming.v1beta.GameServerConfigsService.CreateGameServerConfig`
- `google.cloud.gaming.v1beta.GameServerConfigsService.DeleteGameServerConfig`
- `google.cloud.gaming.v1beta.GameServerConfigsService.GetGameServerConfig`
- `google.cloud.gaming.v1beta.GameServerConfigsService.ListGameServerConfigs`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.CreateGameServerDeployment`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.DeleteGameServerDeployment`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.FetchDeploymentState`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.GetGameServerDeployment`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.GetGameServerDeploymentRollout`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.ListGameServerDeployments`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.PreviewGameServerDeploymentRollout`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.UpdateGameServerDeployment`
- `google.cloud.gaming.v1beta.GameServerDeploymentsService.UpdateGameServerDeploymentRollout`
- `google.cloud.gaming.v1beta.RealmsService.CreateRealm`
- `google.cloud.gaming.v1beta.RealmsService.DeleteRealm`
- `google.cloud.gaming.v1beta.RealmsService.GetRealm`
- `google.cloud.gaming.v1beta.RealmsService.ListRealms`
- `google.cloud.gaming.v1beta.RealmsService.PreviewRealmUpdate`
- `google.cloud.gaming.v1beta.RealmsService.UpdateRealm`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Google Kubernetes Engine (GKE)

#### `serviceName`

- `gkeconnect.googleapis.com`

#### `methodName`

- `google.cloud.gkeconnect.v1.EgressService.Egress`
- `google.cloud.gkeconnect.v1beta1.EgressService.Egress`

### undefined

#### `serviceName`

- `gkedataplanemanagement.googleapis.com`

#### `methodName`

- `SetIamPolicy`

### GKE Hub

#### `serviceName`

- `gkehub.googleapis.com`

#### `methodName`

- `SetIamPolicy`
- `google.cloud.gkehub.v1.GkeHub.CreateFeature`
- `google.cloud.gkehub.v1.GkeHub.CreateMembership`
- `google.cloud.gkehub.v1.GkeHub.DeleteFeature`
- `google.cloud.gkehub.v1.GkeHub.DeleteMembership`
- `google.cloud.gkehub.v1.GkeHub.GenerateConnectManifest`
- `google.cloud.gkehub.v1.GkeHub.GetFeature`
- `google.cloud.gkehub.v1.GkeHub.GetMembership`
- `google.cloud.gkehub.v1.GkeHub.ListFeatures`
- `google.cloud.gkehub.v1.GkeHub.ListMemberships`
- `google.cloud.gkehub.v1.GkeHub.UpdateFeature`
- `google.cloud.gkehub.v1.GkeHub.UpdateMembership`
- `google.cloud.gkehub.v1beta.GkeHub.CreateFeature`
- `google.cloud.gkehub.v1beta.GkeHub.DeleteFeature`
- `google.cloud.gkehub.v1beta.GkeHub.GetFeature`
- `google.cloud.gkehub.v1beta.GkeHub.ListFeatures`
- `google.cloud.gkehub.v1beta.GkeHub.UpdateFeature`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.CreateMembership`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.DeleteMembership`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.GenerateConnectManifest`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.GenerateExclusivityManifest`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.GetMembership`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.ListMemberships`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.UpdateMembership`
- `google.cloud.gkehub.v1beta1.GkeHubMembershipService.ValidateExclusivity`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`

### Cloud Healthcare

#### `serviceName`

- `healthcare.googleapis.com`

#### `methodName`

- `google.cloud.healthcare.v1.consent.ConsentService.ActivateConsent`
- `google.cloud.healthcare.v1.consent.ConsentService.ArchiveUserDataMapping`
- `google.cloud.healthcare.v1.consent.ConsentService.CheckDataAccess`
- `google.cloud.healthcare.v1.consent.ConsentService.CreateAttributeDefinition`
- `google.cloud.healthcare.v1.consent.ConsentService.CreateConsent`
- `google.cloud.healthcare.v1.consent.ConsentService.CreateConsentArtifact`
- `google.cloud.healthcare.v1.consent.ConsentService.CreateConsentStore`
- `google.cloud.healthcare.v1.consent.ConsentService.CreateUserDataMapping`
- `google.cloud.healthcare.v1.consent.ConsentService.DeleteAttributeDefinition`
- `google.cloud.healthcare.v1.consent.ConsentService.DeleteConsent`
- `google.cloud.healthcare.v1.consent.ConsentService.DeleteConsentArtifact`
- `google.cloud.healthcare.v1.consent.ConsentService.DeleteConsentRevision`
- `google.cloud.healthcare.v1.consent.ConsentService.DeleteConsentStore`
- `google.cloud.healthcare.v1.consent.ConsentService.DeleteUserDataMapping`
- `google.cloud.healthcare.v1.consent.ConsentService.EvaluateUserConsents`
- `google.cloud.healthcare.v1.consent.ConsentService.GetAttributeDefinition`
- `google.cloud.healthcare.v1.consent.ConsentService.GetConsent`
- `google.cloud.healthcare.v1.consent.ConsentService.GetConsentArtifact`
- `google.cloud.healthcare.v1.consent.ConsentService.GetConsentStore`
- `google.cloud.healthcare.v1.consent.ConsentService.GetUserDataMapping`
- `google.cloud.healthcare.v1.consent.ConsentService.ListAttributeDefinitions`
- `google.cloud.healthcare.v1.consent.ConsentService.ListConsentArtifacts`
- `google.cloud.healthcare.v1.consent.ConsentService.ListConsentRevisions`
- `google.cloud.healthcare.v1.consent.ConsentService.ListConsentStores`
- `google.cloud.healthcare.v1.consent.ConsentService.ListConsents`
- `google.cloud.healthcare.v1.consent.ConsentService.ListUserDataMappings`
- `google.cloud.healthcare.v1.consent.ConsentService.QueryAccessibleData`
- `google.cloud.healthcare.v1.consent.ConsentService.RejectConsent`
- `google.cloud.healthcare.v1.consent.ConsentService.RevokeConsent`
- `google.cloud.healthcare.v1.consent.ConsentService.UpdateAttributeDefinition`
- `google.cloud.healthcare.v1.consent.ConsentService.UpdateConsent`
- `google.cloud.healthcare.v1.consent.ConsentService.UpdateConsentStore`
- `google.cloud.healthcare.v1.consent.ConsentService.UpdateUserDataMapping`
- `google.cloud.healthcare.v1.dataset.DatasetService.AccessEhrSearch`
- `google.cloud.healthcare.v1.dataset.DatasetService.CreateDataset`
- `google.cloud.healthcare.v1.dataset.DatasetService.DeidentifyDataset`
- `google.cloud.healthcare.v1.dataset.DatasetService.DeleteDataset`
- `google.cloud.healthcare.v1.dataset.DatasetService.GetDataset`
- `google.cloud.healthcare.v1.dataset.DatasetService.ListDatasets`
- `google.cloud.healthcare.v1.dataset.DatasetService.UpdateDataset`
- `google.cloud.healthcare.v1.deidentify.DeidentifyService.DeidentifyDicomStore`
- `google.cloud.healthcare.v1.deidentify.DeidentifyService.DeidentifyFhirStore`
- `google.cloud.healthcare.v1.dicom.DicomService.CreateDicomStore`
- `google.cloud.healthcare.v1.dicom.DicomService.DeleteDicomStore`
- `google.cloud.healthcare.v1.dicom.DicomService.ExportDicomData`
- `google.cloud.healthcare.v1.dicom.DicomService.GetDicomStore`
- `google.cloud.healthcare.v1.dicom.DicomService.ImportDicomData`
- `google.cloud.healthcare.v1.dicom.DicomService.ListDicomStores`
- `google.cloud.healthcare.v1.dicom.DicomService.UpdateDicomStore`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.DeleteInstance`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.DeleteSeries`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.DeleteStudy`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveFrames`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveInstance`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveInstanceMetadata`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveRenderedFrames`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveRenderedInstance`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveSeries`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveSeriesMetadata`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveStudy`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.RetrieveStudyMetadata`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.SearchForInstances`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.SearchForSeries`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.SearchForStudies`
- `google.cloud.healthcare.v1.dicomweb.DicomWebService.StoreInstances`
- `google.cloud.healthcare.v1.fhir.FhirStoreService.CreateFhirStore`
- `google.cloud.healthcare.v1.fhir.FhirStoreService.DeleteFhirStore`
- `google.cloud.healthcare.v1.fhir.FhirStoreService.ExportResources`
- `google.cloud.healthcare.v1.fhir.FhirStoreService.GetFhirStore`
- `google.cloud.healthcare.v1.fhir.FhirStoreService.ImportResources`
- `google.cloud.healthcare.v1.fhir.FhirStoreService.ListFhirStores`
- `google.cloud.healthcare.v1.fhir.FhirStoreService.UpdateFhirStore`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.CreateResource`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.DeleteResource`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.DeleteResourceVersions`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.ExecuteBundle`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.GetCapabilityStatement`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.GetPatientEverything`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.GetResource`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.GetResourceVersion`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.ListResourceVersions`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.PatchResource`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.SearchResources`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.UpdateResource`
- `google.cloud.healthcare.v1.fhir.rest.FhirService.ValidateResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirGRPCService.CreateResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirGRPCService.DeleteResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirGRPCService.GetResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirGRPCService.UpdateResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.CreateResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.DeleteResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.ExecuteBundle`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.GetPatientEverything`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.GetResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.GetResourceVersion`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.SearchResources`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.UpdateResource`
- `google.cloud.healthcare.v1.fhir.stu3.grpc.FhirService.ValidateResource`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.CreateHl7V2Store`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.CreateMessage`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.DeleteHl7V2Store`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.DeleteMessage`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.ExportMessages`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.GetHl7V2Store`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.GetMessage`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.ImportMessages`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.IngestMessage`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.ListHl7V2Stores`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.ListMessages`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.UpdateHl7V2Store`
- `google.cloud.healthcare.v1.hl7v2.Hl7V2Service.UpdateMessage`
- `google.cloud.healthcare.v1.nlp.NlpService.AnalyzeEntities`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.CreateAnnotation`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.CreateAnnotationStore`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.DeleteAnnotation`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.DeleteAnnotationStore`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.EvaluateAnnotationStore`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.ExportAnnotations`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.GetAnnotation`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.GetAnnotationStore`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.ImportAnnotations`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.ListAnnotationStores`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.ListAnnotations`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.UpdateAnnotation`
- `google.cloud.healthcare.v1beta1.annotation.AnnotationService.UpdateAnnotationStore`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ActivateConsent`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ArchiveUserDataMapping`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.CheckDataAccess`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.CreateAttributeDefinition`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.CreateConsent`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.CreateConsentArtifact`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.CreateConsentStore`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.CreateUserDataMapping`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.DeleteAttributeDefinition`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.DeleteConsent`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.DeleteConsentArtifact`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.DeleteConsentRevision`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.DeleteConsentStore`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.DeleteUserDataMapping`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.EvaluateUserConsents`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.GetAttributeDefinition`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.GetConsent`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.GetConsentArtifact`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.GetConsentStore`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.GetUserDataMapping`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ListAttributeDefinitions`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ListConsentArtifacts`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ListConsentRevisions`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ListConsentStores`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ListConsents`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.ListUserDataMappings`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.QueryAccessibleData`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.RejectConsent`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.RevokeConsent`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.UpdateAttributeDefinition`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.UpdateConsent`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.UpdateConsentStore`
- `google.cloud.healthcare.v1beta1.consent.ConsentService.UpdateUserDataMapping`
- `google.cloud.healthcare.v1beta1.dataset.DatasetService.CreateDataset`
- `google.cloud.healthcare.v1beta1.dataset.DatasetService.DeidentifyDataset`
- `google.cloud.healthcare.v1beta1.dataset.DatasetService.DeleteDataset`
- `google.cloud.healthcare.v1beta1.dataset.DatasetService.GetDataset`
- `google.cloud.healthcare.v1beta1.dataset.DatasetService.ListDatasets`
- `google.cloud.healthcare.v1beta1.dataset.DatasetService.UpdateDataset`
- `google.cloud.healthcare.v1beta1.deidentify.DeidentifyService.DeidentifyDicomStore`
- `google.cloud.healthcare.v1beta1.deidentify.DeidentifyService.DeidentifyFhirStore`
- `google.cloud.healthcare.v1beta1.dicom.DicomService.CreateDicomStore`
- `google.cloud.healthcare.v1beta1.dicom.DicomService.DeleteDicomStore`
- `google.cloud.healthcare.v1beta1.dicom.DicomService.ExportDicomData`
- `google.cloud.healthcare.v1beta1.dicom.DicomService.GetDicomStore`
- `google.cloud.healthcare.v1beta1.dicom.DicomService.ImportDicomData`
- `google.cloud.healthcare.v1beta1.dicom.DicomService.ListDicomStores`
- `google.cloud.healthcare.v1beta1.dicom.DicomService.UpdateDicomStore`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.DeleteInstance`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.DeleteSeries`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.DeleteStudy`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveFrames`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveInstance`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveInstanceMetadata`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveRenderedFrames`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveRenderedInstance`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveSeries`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveSeriesMetadata`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveStudy`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.RetrieveStudyMetadata`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.SearchForInstances`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.SearchForSeries`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.SearchForStudies`
- `google.cloud.healthcare.v1beta1.dicomweb.DicomWebService.StoreInstances`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.ConfigureSearch`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.CreateFhirStore`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.DeleteFhirStore`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.ExportResources`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.GetFhirStore`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.ImportResources`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.ListFhirStores`
- `google.cloud.healthcare.v1beta1.fhir.FhirStoreService.UpdateFhirStore`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ConceptMapSearchTranslate`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ConceptMapTranslate`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ConditionalCreateResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ConditionalDeleteResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ConditionalPatchResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ConditionalUpdateResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.CreateResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.DeleteResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.DeleteResourceVersions`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ExecuteBundle`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.GetCapabilityStatement`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.GetLastNObservations`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.GetPatientEverything`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.GetResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.GetResourceVersion`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ListResourceVersions`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.PatchResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.SearchResources`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.UpdateResource`
- `google.cloud.healthcare.v1beta1.fhir.rest.FhirService.ValidateResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirGRPCService.CreateResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirGRPCService.DeleteResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirGRPCService.GetResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirGRPCService.UpdateResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.ConditionalDeleteResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.ConditionalPatchResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.ConditionalUpdateResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.CreateResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.DeleteResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.DeleteResourceVersions`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.ExecuteBundle`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.GetCapabilityStatement`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.GetLastNObservations`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.GetPatientEverything`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.GetResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.GetResourceVersion`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.ListResourceVersions`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.PatchResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.SearchResources`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.UpdateResource`
- `google.cloud.healthcare.v1beta1.fhir.stu3.grpc.FhirService.ValidateResource`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.BatchGetMessages`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.CreateHl7V2Store`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.CreateMessage`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.DeleteHl7V2Store`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.DeleteMessage`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.ExportMessages`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.GetHl7V2Store`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.GetMessage`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.ImportMessages`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.IngestMessage`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.ListHl7V2Stores`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.ListMessages`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.UpdateHl7V2Store`
- `google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service.UpdateMessage`
- `google.cloud.healthcare.v1beta1.nlp.NlpService.AnalyzeEntities`
- `google.cloud.location.Locations.GetLocation`
- `google.cloud.location.Locations.ListLocations`
- `google.iam.v1.IAMPolicy.GetIamPolicy`
- `google.iam.v1.IAMPolicy.SetIamPolicy`

### Cloud IAM

#### `serviceName`

- `iam.googleapis.com`

#### `methodName`

- `google.iam.admin.v1.CreateRole`
- `google.iam.admin.v1.CreateServiceAccount`
- `google.iam.admin.v1.CreateServiceAccountKey`
- `google.iam.admin.v1.DeleteRole`
- `google.iam.admin.v1.DeleteServiceAccount`
- `google.iam.admin.v1.DeleteServiceAccountKey`
- `google.iam.admin.v1.DisableServiceAccount`
- `google.iam.admin.v1.DisableServiceAccountKey`
- `google.iam.admin.v1.EnableServiceAccount`
- `google.iam.admin.v1.EnableServiceAccountKey`
- `google.iam.admin.v1.GetEffectivePolicy`
- `google.iam.admin.v1.GetIAMPolicy`
- `google.iam.admin.v1.GetPolicyDetails`
- `google.iam.admin.v1.GetRole`
- `google.iam.admin.v1.GetServiceAccount`
- `google.iam.admin.v1.GetServiceAccountKey`
- `google.iam.admin.v1.ListRoles`
- `google.iam.admin.v1.ListServiceAccountKeys`
- `google.iam.admin.v1.ListServiceAccounts`
- `google.iam.admin.v1.PatchServiceAccount`
- `google.iam.admin.v1.QueryGrantableRoles`
- `google.iam.admin.v1.SetIAMPolicy`
- `google.iam.admin.v1.SignBlob`
- `google.iam.admin.v1.SignJwt`
- `google.iam.admin.v1.TestIAMPermissions`
- `google.iam.admin.v1.UndeleteRole`
- `google.iam.admin.v1.UndeleteServiceAccount`
- `google.iam.admin.v1.UpdateRole`
- `google.iam.admin.v1.UpdateServiceAccount`
- `google.iam.admin.v1.UploadServiceAccountKey`
- `google.iam.admin.v1.WorkforcePools.CreateWorkforcePool`
- `google.iam.admin.v1.WorkforcePools.CreateWorkforcePoolProvider`
- `google.iam.admin.v1.WorkforcePools.DeleteWorkforcePool`
- `google.iam.admin.v1.WorkforcePools.DeleteWorkforcePoolProvider`
- `google.iam.admin.v1.WorkforcePools.DeleteWorkforcePoolSubject`
- `google.iam.admin.v1.WorkforcePools.GetWorkforcePool`
- `google.iam.admin.v1.WorkforcePools.GetWorkforcePoolProvider`
- `google.iam.admin.v1.WorkforcePools.ListWorkforcePoolProviders`
- `google.iam.admin.v1.WorkforcePools.ListWorkforcePools`
- `google.iam.admin.v1.WorkforcePools.UndeleteWorkforcePool`
- `google.iam.admin.v1.WorkforcePools.UndeleteWorkforcePoolProvider`
- `google.iam.admin.v1.WorkforcePools.UndeleteWorkforcePoolSubject`
- `google.iam.admin.v1.WorkforcePools.UpdateWorkforcePool`
- `google.iam.admin.v1.WorkforcePools.UpdateWorkforcePoolProvider`
- `google.iam.v1.WorkloadIdentityPools.CreateWorkloadIdentityPool`
- `google.iam.v1.WorkloadIdentityPools.CreateWorkloadIdentityPoolProvider`
- `google.iam.v1.WorkloadIdentityPools.CreateWorkloadIdentityPoolProviderKey`
- `google.iam.v1.WorkloadIdentityPools.DeleteWorkloadIdentityPool`
- `google.iam.v1.WorkloadIdentityPools.DeleteWorkloadIdentityPoolProvider`
- `google.iam.v1.WorkloadIdentityPools.DeleteWorkloadIdentityPoolProviderKey`
- `google.iam.v1.WorkloadIdentityPools.GetWorkloadIdentityPool`
- `google.iam.v1.WorkloadIdentityPools.GetWorkloadIdentityPoolProvider`
- `google.iam.v1.WorkloadIdentityPools.GetWorkloadIdentityPoolProviderKey`
- `google.iam.v1.WorkloadIdentityPools.ListWorkloadIdentityPoolProviderKeys`
- `google.iam.v1.WorkloadIdentityPools.ListWorkloadIdentityPoolProviders`
- `google.iam.v1.WorkloadIdentityPools.ListWorkloadIdentityPools`
- `google.iam.v1.WorkloadIdentityPools.UndeleteWorkloadIdentityPool`
- `google.iam.v1.WorkloadIdentityPools.UndeleteWorkloadIdentityPoolProvider`
- `google.iam.v1.WorkloadIdentityPools.UndeleteWorkloadIdentityPoolProviderKey`
- `google.iam.v1.WorkloadIdentityPools.UpdateWorkloadIdentityPool`
- `google.iam.v1.WorkloadIdentityPools.UpdateWorkloadIdentityPoolProvider`
- `google.iam.v1beta.WorkloadIdentityPools.CreateWorkloadIdentityPool`
- `google.iam.v1beta.WorkloadIdentityPools.CreateWorkloadIdentityPoolProvider`
- `google.iam.v1beta.WorkloadIdentityPools.DeleteWorkloadIdentityPool`
- `google.iam.v1beta.WorkloadIdentityPools.DeleteWorkloadIdentityPoolProvider`
- `google.iam.v1beta.WorkloadIdentityPools.GetWorkloadIdentityPool`
- `google.iam.v1beta.WorkloadIdentityPools.GetWorkloadIdentityPoolProvider`
- `google.iam.v1beta.WorkloadIdentityPools.ListWorkloadIdentityPoolProviders`
- `google.iam.v1beta.WorkloadIdentityPools.ListWorkloadIdentityPools`
- `google.iam.v1beta.WorkloadIdentityPools.UndeleteWorkloadIdentityPool`
- `google.iam.v1beta.WorkloadIdentityPools.UndeleteWorkloadIdentityPoolProvider`
- `google.iam.v1beta.WorkloadIdentityPools.UpdateWorkloadIdentityPool`
- `google.iam.v1beta.WorkloadIdentityPools.UpdateWorkloadIdentityPoolProvider`
- `google.iam.v2beta.Policies.CreatePolicy`
- `google.iam.v2beta.Policies.DeletePolicy`
- `google.iam.v2beta.Policies.GetPolicy`
- `google.iam.v2beta.Policies.ListPolicies`
- `google.iam.v2beta.Policies.UpdatePolicy`

### Cloud IAM Service Account Credentials

#### `serviceName`

- `iamcredentials.googleapis.com`

#### `methodName`

- `GenerateAccessToken`
- `GenerateIdToken`
- `SignBlob`
- `SignJwt`

### Identity-Aware Proxy (IAP)

#### `serviceName`

- `iap.googleapis.com`

#### `methodName`

- `AuthorizeUser`
- `google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIamPolicy`
- `google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIapSettings`
- `google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy`
- `google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateIapSettings`
- `google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy`
- `google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy`

### Identity Toolkit

#### `serviceName`

- `identitytoolkit.googleapis.com`

#### `methodName`

- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.CreateConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.CreateDefaultSupportedIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.CreateInboundSamlConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.CreateOAuthIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.DeleteDefaultSupportedIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.DeleteInboundSamlConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.DeleteOAuthIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.EnableIdentityPlatform`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetDefaultSupportedIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetInboundSamlConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.GetOAuthIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.InitializeIdentityPlatform`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListDefaultSupportedIdpConfigs`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListInboundSamlConfigs`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.ListOAuthIdpConfigs`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.SetIamPolicy`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateDefaultSupportedIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateInboundSamlConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.UpdateOAuthIdpConfig`
- `google.cloud.identitytoolkit.admin.v2.ProjectConfigService.VerifyDomain`
- `google.cloud.identitytoolkit.admin.v2.TenantManagementService.CreateTenant`
- `google.cloud.identitytoolkit.admin.v2.TenantManagementService.DeleteTenant`
- `google.cloud.identitytoolkit.admin.v2.TenantManagementService.GetTenant`
- `google.cloud.identitytoolkit.admin.v2.TenantManagementService.ListTenants`
- `google.cloud.identitytoolkit.admin.v2.TenantManagementService.UpdateTenant`
- `google.cloud.identitytoolkit.v1.AccountManagementService.BatchDeleteAccounts`
- `google.cloud.identitytoolkit.v1.AccountManagementService.DeleteAccount`
- `google.cloud.identitytoolkit.v1.AccountManagementService.DownloadAccount`
- `google.cloud.identitytoolkit.v1.AccountManagementService.GetAccountInfo`
- `google.cloud.identitytoolkit.v1.AccountManagementService.GetOobCode`
- `google.cloud.identitytoolkit.v1.AccountManagementService.QueryUserInfo`
- `google.cloud.identitytoolkit.v1.AccountManagementService.SetAccountInfo`
- `google.cloud.identitytoolkit.v1.AccountManagementService.UploadAccount`
- `google.cloud.identitytoolkit.v1.AuthenticationService.SignUp`
- `google.cloud.identitytoolkit.v1.SessionManagementService.CreateSessionCookie`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.CreateInboundSamlConfig`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.CreateOAuthIdpConfig`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.DeleteInboundSamlConfig`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.DeleteOAuthIdpConfig`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.ListInboundSamlConfigs`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.ListOAuthIdpConfigs`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.UpdateInboundSamlConfig`
- `google.cloud.identitytoolkit.v2beta1.ProjectConfigService.UpdateOAuthIdpConfig`
- `google.cloud.identitytoolkit.v2beta1.TenantManagementService.CreateTenant`
- `google.cloud.identitytoolkit.v2beta1.TenantManagementService.DeleteTenant`
- `google.cloud.identitytoolkit.v2beta1.TenantManagementService.GetTenant`
- `google.cloud.identitytoolkit.v2beta1.TenantManagementService.ListTenants`
- `google.cloud.identitytoolkit.v2beta1.TenantManagementService.UpdateTenant`

### Cloud Life Sciences

#### `serviceName`

- `lifesciences.googleapis.com`

#### `methodName`

- `google.cloud.lifesciences.v2beta.WorkflowsServiceV2Beta.RunPipeline`
- `google.longrunning.Operations.CancelOperation`

### Cloud Logging

#### `serviceName`

- `logging.googleapis.com`

#### `methodName`

- `google.logging.v2.AnalyticsService.QueryLogEntries`
- `google.logging.v2.BillingService.GetUsageByResourceType`
- `google.logging.v2.ConfigServiceV2.CopyLogEntries`
- `google.logging.v2.ConfigServiceV2.CreateBucket`
- `google.logging.v2.ConfigServiceV2.CreateBucketAsync`
- `google.logging.v2.ConfigServiceV2.CreateExclusion`
- `google.logging.v2.ConfigServiceV2.CreateSink`
- `google.logging.v2.ConfigServiceV2.CreateView`
- `google.logging.v2.ConfigServiceV2.DeleteBucket`
- `google.logging.v2.ConfigServiceV2.DeleteExclusion`
- `google.logging.v2.ConfigServiceV2.DeleteSink`
- `google.logging.v2.ConfigServiceV2.DeleteView`
- `google.logging.v2.ConfigServiceV2.GetBucket`
- `google.logging.v2.ConfigServiceV2.GetCmekSettings`
- `google.logging.v2.ConfigServiceV2.GetExclusion`
- `google.logging.v2.ConfigServiceV2.GetSink`
- `google.logging.v2.ConfigServiceV2.GetView`
- `google.logging.v2.ConfigServiceV2.ListBuckets`
- `google.logging.v2.ConfigServiceV2.ListExclusions`
- `google.logging.v2.ConfigServiceV2.ListSinks`
- `google.logging.v2.ConfigServiceV2.UndeleteBucket`
- `google.logging.v2.ConfigServiceV2.UpdateBucket`
- `google.logging.v2.ConfigServiceV2.UpdateBucketAsync`
- `google.logging.v2.ConfigServiceV2.UpdateCmekSettings`
- `google.logging.v2.ConfigServiceV2.UpdateExclusion`
- `google.logging.v2.ConfigServiceV2.UpdateSink`
- `google.logging.v2.ConfigServiceV2.UpdateView`
- `google.logging.v2.Locations.GetLocation`
- `google.logging.v2.Locations.ListLocations`
- `google.logging.v2.LoggingServiceV2.AggregateLogs`
- `google.logging.v2.LoggingServiceV2.DeleteLog`
- `google.logging.v2.LoggingServiceV2.ListLogEntries`
- `google.logging.v2.LoggingServiceV2.ListLogViews`
- `google.logging.v2.LoggingServiceV2.ListLogs`
- `google.logging.v2.LoggingServiceV2.ListResourceKeys`
- `google.logging.v2.LoggingServiceV2.ListResourceValues`
- `google.logging.v2.LoggingServiceV2.ReadLogEntriesLegacy`
- `google.logging.v2.MetricsServiceV2.CreateLogMetric`
- `google.logging.v2.MetricsServiceV2.DeleteLogMetric`
- `google.logging.v2.MetricsServiceV2.GetLogMetric`
- `google.logging.v2.MetricsServiceV2.ListLogMetrics`
- `google.logging.v2.MetricsServiceV2.UpdateLogMetric`
- `google.logging.v2.Operations.CancelOperation`

### Cloud Managed Microsoft Active Directory

#### `serviceName`

- `managedidentities.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.AttachTrust`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateMicrosoftAdDomain`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.CreatePeering`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteDomain`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.DeletePeering`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.DetachTrust`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.GetDomain`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.GetLDAPSSettings`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.GetPeering`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.GetSqlIntegration`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.ListDomains`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.ListPeerings`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.ListSqlIntegrations`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.ReconfigureTrust`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.ResetAdminPassword`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdateDomain`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdatePeering`
- `google.cloud.managedidentities.v1.ManagedIdentitiesService.ValidateTrust`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.AttachTrust`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateMicrosoftAdDomain`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreatePeering`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeleteDomain`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeletePeering`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DetachTrust`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetDomain`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetLDAPSSettings`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetPeering`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetSqlIntegration`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListDomains`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListPeerings`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListSqlIntegrations`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ReconfigureTrust`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ResetAdminPassword`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateDomain`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateLDAPSSettings`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdatePeering`
- `google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ValidateTrust`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud Memcache

#### `serviceName`

- `memcache.googleapis.com`

#### `methodName`

- `google.cloud.memcache.v1.CloudMemcache.ApplyParameters`
- `google.cloud.memcache.v1.CloudMemcache.CreateInstance`
- `google.cloud.memcache.v1.CloudMemcache.DeleteInstance`
- `google.cloud.memcache.v1.CloudMemcache.GetInstance`
- `google.cloud.memcache.v1.CloudMemcache.ListInstances`
- `google.cloud.memcache.v1.CloudMemcache.UpdateInstance`
- `google.cloud.memcache.v1.CloudMemcache.UpdateParameters`
- `google.cloud.memcache.v1beta2.CloudMemcache.ApplyParameters`
- `google.cloud.memcache.v1beta2.CloudMemcache.ApplySoftwareUpdate`
- `google.cloud.memcache.v1beta2.CloudMemcache.CreateInstance`
- `google.cloud.memcache.v1beta2.CloudMemcache.DeleteInstance`
- `google.cloud.memcache.v1beta2.CloudMemcache.GetInstance`
- `google.cloud.memcache.v1beta2.CloudMemcache.ListInstances`
- `google.cloud.memcache.v1beta2.CloudMemcache.UpdateInstance`
- `google.cloud.memcache.v1beta2.CloudMemcache.UpdateParameters`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Mesh certificate authority

#### `serviceName`

- `meshca.googleapis.com`

#### `methodName`

- `google.security.meshca.v1.MeshCertificateService.CreateCertificate`
- `google.security.meshca.v1beta1.MeshCertificateService.CreateCertificate`

### Dataproc Metastore

#### `serviceName`

- `metastore.googleapis.com`

#### `methodName`

- `DummyOpGetInstance`
- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.metastore.v1.DataprocMetastore.CreateBackup`
- `google.cloud.metastore.v1.DataprocMetastore.CreateMetadataImport`
- `google.cloud.metastore.v1.DataprocMetastore.CreateService`
- `google.cloud.metastore.v1.DataprocMetastore.DeleteBackup`
- `google.cloud.metastore.v1.DataprocMetastore.DeleteService`
- `google.cloud.metastore.v1.DataprocMetastore.ExportMetadata`
- `google.cloud.metastore.v1.DataprocMetastore.GetBackup`
- `google.cloud.metastore.v1.DataprocMetastore.GetMetadataImport`
- `google.cloud.metastore.v1.DataprocMetastore.GetService`
- `google.cloud.metastore.v1.DataprocMetastore.ListBackups`
- `google.cloud.metastore.v1.DataprocMetastore.ListMetadataImports`
- `google.cloud.metastore.v1.DataprocMetastore.ListServices`
- `google.cloud.metastore.v1.DataprocMetastore.RestoreService`
- `google.cloud.metastore.v1.DataprocMetastore.UpdateService`
- `google.cloud.metastore.v1beta.DataprocMetastore.CreateBackup`
- `google.cloud.metastore.v1beta.DataprocMetastore.CreateMetadataImport`
- `google.cloud.metastore.v1beta.DataprocMetastore.CreateService`
- `google.cloud.metastore.v1beta.DataprocMetastore.DeleteBackup`
- `google.cloud.metastore.v1beta.DataprocMetastore.DeleteService`
- `google.cloud.metastore.v1beta.DataprocMetastore.ExportMetadata`
- `google.cloud.metastore.v1beta.DataprocMetastore.GetBackup`
- `google.cloud.metastore.v1beta.DataprocMetastore.GetMetadataImport`
- `google.cloud.metastore.v1beta.DataprocMetastore.GetService`
- `google.cloud.metastore.v1beta.DataprocMetastore.ListBackups`
- `google.cloud.metastore.v1beta.DataprocMetastore.ListMetadataImports`
- `google.cloud.metastore.v1beta.DataprocMetastore.ListServices`
- `google.cloud.metastore.v1beta.DataprocMetastore.RestoreService`
- `google.cloud.metastore.v1beta.DataprocMetastore.UpdateMetadataImport`
- `google.cloud.metastore.v1beta.DataprocMetastore.UpdateService`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud Machine Learning Engine

#### `serviceName`

- `ml.googleapis.com`

#### `methodName`

- `google.cloud.ml.v1.JobService.CancelJob`
- `google.cloud.ml.v1.JobService.CreateJob`
- `google.cloud.ml.v1.JobService.GetJob`
- `google.cloud.ml.v1.JobService.ListJobs`
- `google.cloud.ml.v1.LocationService.GetLocation`
- `google.cloud.ml.v1.LocationService.ListLocations`
- `google.cloud.ml.v1.ModelService.CreateModel`
- `google.cloud.ml.v1.ModelService.CreateVersion`
- `google.cloud.ml.v1.ModelService.DeleteModel`
- `google.cloud.ml.v1.ModelService.DeleteVersion`
- `google.cloud.ml.v1.ModelService.GetModel`
- `google.cloud.ml.v1.ModelService.GetVersion`
- `google.cloud.ml.v1.ModelService.ListModels`
- `google.cloud.ml.v1.ModelService.ListVersions`
- `google.cloud.ml.v1.ModelService.SetDefaultVersion`
- `google.cloud.ml.v1.ModelService.UpdateModel`
- `google.cloud.ml.v1.ModelService.UpdateVersion`
- `google.cloud.ml.v1.ProjectManagementService.GetConfig`
- `google.cloud.ml.v1.StudyService.AddTrialMeasurement`
- `google.cloud.ml.v1.StudyService.CheckTrialEarlyStoppingState`
- `google.cloud.ml.v1.StudyService.CompleteTrial`
- `google.cloud.ml.v1.StudyService.CreateStudy`
- `google.cloud.ml.v1.StudyService.CreateTrial`
- `google.cloud.ml.v1.StudyService.DeleteStudy`
- `google.cloud.ml.v1.StudyService.DeleteTrial`
- `google.cloud.ml.v1.StudyService.GetStudy`
- `google.cloud.ml.v1.StudyService.GetTrial`
- `google.cloud.ml.v1.StudyService.ListStudies`
- `google.cloud.ml.v1.StudyService.ListTrials`
- `google.cloud.ml.v1.StudyService.SuggestTrials`
- `google.iam.v1.IAMPolicy.GetIamPolicy`
- `google.iam.v1.IAMPolicy.SetIamPolicy`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.ListOperations`

### Cloud Monitoring

#### `serviceName`

- `monitoring.googleapis.com`

#### `methodName`

- `google.monitoring.dashboard.v1.DashboardsService.CreateDashboard`
- `google.monitoring.dashboard.v1.DashboardsService.DeleteDashboard`
- `google.monitoring.dashboard.v1.DashboardsService.GetDashboard`
- `google.monitoring.dashboard.v1.DashboardsService.HighAvailabilityGetDashboard`
- `google.monitoring.dashboard.v1.DashboardsService.HighAvailabilityListDashboards`
- `google.monitoring.dashboard.v1.DashboardsService.ListDashboards`
- `google.monitoring.dashboard.v1.DashboardsService.UpdateDashboard`
- `google.monitoring.metricsscope.v1.MetricsScopes.CreateMonitoredProject`
- `google.monitoring.metricsscope.v1.MetricsScopes.DeleteMonitoredProject`
- `google.monitoring.metricsscope.v1.MetricsScopes.GetMetricsScope`
- `google.monitoring.metricsscope.v1.MetricsScopes.ListMetricsScopesByMonitoredProject`
- `google.monitoring.v3.AgentTranslationService.CreateCollectdTimeSeries`
- `google.monitoring.v3.AlertPolicyService.CreateAlertPolicy`
- `google.monitoring.v3.AlertPolicyService.DeleteAlertPolicy`
- `google.monitoring.v3.AlertPolicyService.GetAlertPolicy`
- `google.monitoring.v3.AlertPolicyService.ListAlertPolicies`
- `google.monitoring.v3.AlertPolicyService.UpdateAlertPolicy`
- `google.monitoring.v3.GroupService.CreateGroup`
- `google.monitoring.v3.GroupService.DeleteGroup`
- `google.monitoring.v3.GroupService.GetGroup`
- `google.monitoring.v3.GroupService.ListGroupMembers`
- `google.monitoring.v3.GroupService.ListGroups`
- `google.monitoring.v3.GroupService.ListPreviewGroupMembers`
- `google.monitoring.v3.GroupService.UpdateGroup`
- `google.monitoring.v3.MetricService.CreateMetricDescriptor`
- `google.monitoring.v3.MetricService.CreateServiceTimeSeries`
- `google.monitoring.v3.MetricService.CreateTimeSeries`
- `google.monitoring.v3.MetricService.DeleteMetricDescriptor`
- `google.monitoring.v3.MetricService.GetMetricDescriptor`
- `google.monitoring.v3.MetricService.ListMetricDescriptors`
- `google.monitoring.v3.MetricService.ListTimeSeries`
- `google.monitoring.v3.MetricService.QueryActiveTimeSeries`
- `google.monitoring.v3.NotificationChannelService.CreateNotificationChannel`
- `google.monitoring.v3.NotificationChannelService.DeleteNotificationChannel`
- `google.monitoring.v3.NotificationChannelService.GetNotificationChannel`
- `google.monitoring.v3.NotificationChannelService.GetNotificationChannelVerificationCode`
- `google.monitoring.v3.NotificationChannelService.ListNotificationChannels`
- `google.monitoring.v3.NotificationChannelService.SendNotificationChannelVerificationCode`
- `google.monitoring.v3.NotificationChannelService.TestNotificationChannel`
- `google.monitoring.v3.NotificationChannelService.UpdateNotificationChannel`
- `google.monitoring.v3.NotificationChannelService.VerifyNotificationChannel`
- `google.monitoring.v3.QueryService.AnnotateQuery`
- `google.monitoring.v3.QueryService.ConvertTimeSeriesQuery`
- `google.monitoring.v3.QueryService.ListQueryNotationCompletions`
- `google.monitoring.v3.QueryService.QueryTimeSeries`
- `google.monitoring.v3.QueryService.ValidateTimeSeriesQuery`
- `google.monitoring.v3.ServiceMonitoringService.CreateService`
- `google.monitoring.v3.ServiceMonitoringService.CreateServiceLevelObjective`
- `google.monitoring.v3.ServiceMonitoringService.DeleteService`
- `google.monitoring.v3.ServiceMonitoringService.DeleteServiceLevelObjective`
- `google.monitoring.v3.ServiceMonitoringService.GetService`
- `google.monitoring.v3.ServiceMonitoringService.GetServiceLevelObjective`
- `google.monitoring.v3.ServiceMonitoringService.ListServiceLevelObjectives`
- `google.monitoring.v3.ServiceMonitoringService.ListServices`
- `google.monitoring.v3.ServiceMonitoringService.UpdateService`
- `google.monitoring.v3.ServiceMonitoringService.UpdateServiceLevelObjective`
- `google.monitoring.v3.TimeSeriesFilterService.FormatTimeSeriesFilter`
- `google.monitoring.v3.TimeSeriesFilterService.ParseTimeSeriesFilter`
- `google.monitoring.v3.UptimeCheckService.CreateUptimeCheckConfig`
- `google.monitoring.v3.UptimeCheckService.DeleteUptimeCheckConfig`
- `google.monitoring.v3.UptimeCheckService.GetUptimeCheckConfig`
- `google.monitoring.v3.UptimeCheckService.ListUptimeCheckConfigs`
- `google.monitoring.v3.UptimeCheckService.UpdateUptimeCheckConfig`
- `google.monitoring.v3.UptimeCheckService.ValidateUptimeCheckConfig`

### Network Connectivity

#### `serviceName`

- `networkconnectivity.googleapis.com`

#### `methodName`

- `SetIamPolicy`
- `google.cloud.networkconnectivity.v1.HubService.ActivateSpoke`
- `google.cloud.networkconnectivity.v1.HubService.CreateHub`
- `google.cloud.networkconnectivity.v1.HubService.CreateSpoke`
- `google.cloud.networkconnectivity.v1.HubService.DeactivateSpoke`
- `google.cloud.networkconnectivity.v1.HubService.DeleteHub`
- `google.cloud.networkconnectivity.v1.HubService.DeleteSpoke`
- `google.cloud.networkconnectivity.v1.HubService.GetHub`
- `google.cloud.networkconnectivity.v1.HubService.GetSpoke`
- `google.cloud.networkconnectivity.v1.HubService.ListHubs`
- `google.cloud.networkconnectivity.v1.HubService.ListSpokes`
- `google.cloud.networkconnectivity.v1.HubService.UpdateHub`
- `google.cloud.networkconnectivity.v1.HubService.UpdateSpoke`
- `google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.CreatePolicyBasedRoute`
- `google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.DeletePolicyBasedRoute`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Network Management

#### `serviceName`

- `networkmanagement.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.networkmanagement.v1.ReachabilityService.CreateConnectivityTest`
- `google.cloud.networkmanagement.v1.ReachabilityService.DeleteConnectivityTest`
- `google.cloud.networkmanagement.v1.ReachabilityService.GetConnectivityTest`
- `google.cloud.networkmanagement.v1.ReachabilityService.ListConnectivityTests`
- `google.cloud.networkmanagement.v1.ReachabilityService.RerunConnectivityTest`
- `google.cloud.networkmanagement.v1.ReachabilityService.UpdateConnectivityTest`
- `google.cloud.networkmanagement.v1beta1.ReachabilityService.CreateConnectivityTest`
- `google.cloud.networkmanagement.v1beta1.ReachabilityService.DeleteConnectivityTest`
- `google.cloud.networkmanagement.v1beta1.ReachabilityService.GetConnectivityTest`
- `google.cloud.networkmanagement.v1beta1.ReachabilityService.ListConnectivityTests`
- `google.cloud.networkmanagement.v1beta1.ReachabilityService.RerunConnectivityTest`
- `google.cloud.networkmanagement.v1beta1.ReachabilityService.UpdateConnectivityTest`

### Network Security

#### `serviceName`

- `networksecurity.googleapis.com`

#### `methodName`

- `SetIamPolicy`
- `google.cloud.networksecurity.v1.NetworkSecurity.CreateServerTlsPolicy`
- `google.cloud.networksecurity.v1.NetworkSecurity.DeleteClientTlsPolicy`
- `google.cloud.networksecurity.v1.NetworkSecurity.DeleteServerTlsPolicy`
- `google.cloud.networksecurity.v1.NetworkSecurity.GetClientTlsPolicy`
- `google.cloud.networksecurity.v1.NetworkSecurity.GetServerTlsPolicy`
- `google.cloud.networksecurity.v1.NetworkSecurity.ListAuthorizationPolicies`
- `google.cloud.networksecurity.v1.NetworkSecurity.ListClientTlsPolicies`
- `google.cloud.networksecurity.v1.NetworkSecurity.ListServerTlsPolicies`
- `google.cloud.networksecurity.v1.NetworkSecurity.UpdateServerTlsPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.CreateAuthorizationPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.CreateClientTlsPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.CreateServerTlsPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.DeleteAuthorizationPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.DeleteClientTlsPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.DeleteServerTlsPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.GetClientTlsPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.ListClientTlsPolicies`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.UpdateAuthorizationPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.UpdateClientTlsPolicy`
- `google.cloud.networksecurity.v1beta1.NetworkSecurity.UpdateServerTlsPolicy`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`

### Network Services

#### `serviceName`

- `networkservices.googleapis.com`

#### `methodName`

- `google.cloud.networkservices.v1.NetworkServices.CreateEdgeCacheKeyset`
- `google.cloud.networkservices.v1.NetworkServices.CreateEdgeCacheOrigin`
- `google.cloud.networkservices.v1.NetworkServices.CreateEdgeCacheService`
- `google.cloud.networkservices.v1.NetworkServices.CreateEndpointPolicy`
- `google.cloud.networkservices.v1.NetworkServices.DeleteEdgeCacheKeyset`
- `google.cloud.networkservices.v1.NetworkServices.DeleteEdgeCacheOrigin`
- `google.cloud.networkservices.v1.NetworkServices.DeleteEdgeCacheService`
- `google.cloud.networkservices.v1.NetworkServices.DeleteEndpointPolicy`
- `google.cloud.networkservices.v1.NetworkServices.GetEdgeCacheKeyset`
- `google.cloud.networkservices.v1.NetworkServices.GetEdgeCacheOrigin`
- `google.cloud.networkservices.v1.NetworkServices.GetEdgeCacheService`
- `google.cloud.networkservices.v1.NetworkServices.ListEdgeCacheKeysets`
- `google.cloud.networkservices.v1.NetworkServices.ListEdgeCacheOrigins`
- `google.cloud.networkservices.v1.NetworkServices.ListEdgeCacheServices`
- `google.cloud.networkservices.v1.NetworkServices.ListEndpointPolicies`
- `google.cloud.networkservices.v1.NetworkServices.UpdateEdgeCacheKeyset`
- `google.cloud.networkservices.v1.NetworkServices.UpdateEdgeCacheOrigin`
- `google.cloud.networkservices.v1.NetworkServices.UpdateEdgeCacheService`
- `google.cloud.networkservices.v1beta1.NetworkServices.CreateEndpointPolicy`
- `google.cloud.networkservices.v1beta1.NetworkServices.CreateServiceBinding`
- `google.cloud.networkservices.v1beta1.NetworkServices.DeleteEndpointPolicy`
- `google.cloud.networkservices.v1beta1.NetworkServices.DeleteServiceBinding`
- `google.cloud.networkservices.v1beta1.NetworkServices.GetServiceBinding`
- `google.cloud.networkservices.v1beta1.NetworkServices.UpdateEndpointPolicy`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`

### AI Platform Notebooks

#### `serviceName`

- `notebooks.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.notebooks.v1.ManagedNotebookService.CreateRuntime`
- `google.cloud.notebooks.v1.ManagedNotebookService.DeleteRuntime`
- `google.cloud.notebooks.v1.ManagedNotebookService.GetRuntime`
- `google.cloud.notebooks.v1.ManagedNotebookService.ListRuntimes`
- `google.cloud.notebooks.v1.ManagedNotebookService.ResetRuntime`
- `google.cloud.notebooks.v1.ManagedNotebookService.StartRuntime`
- `google.cloud.notebooks.v1.ManagedNotebookService.StopRuntime`
- `google.cloud.notebooks.v1.ManagedNotebookService.SwitchRuntime`
- `google.cloud.notebooks.v1.NotebookService.CreateEnvironment`
- `google.cloud.notebooks.v1.NotebookService.CreateExecution`
- `google.cloud.notebooks.v1.NotebookService.CreateInstance`
- `google.cloud.notebooks.v1.NotebookService.CreateSchedule`
- `google.cloud.notebooks.v1.NotebookService.DeleteEnvironment`
- `google.cloud.notebooks.v1.NotebookService.DeleteExecution`
- `google.cloud.notebooks.v1.NotebookService.DeleteInstance`
- `google.cloud.notebooks.v1.NotebookService.DeleteSchedule`
- `google.cloud.notebooks.v1.NotebookService.GetEnvironment`
- `google.cloud.notebooks.v1.NotebookService.GetExecution`
- `google.cloud.notebooks.v1.NotebookService.GetInstance`
- `google.cloud.notebooks.v1.NotebookService.GetInstanceHealth`
- `google.cloud.notebooks.v1.NotebookService.GetSchedule`
- `google.cloud.notebooks.v1.NotebookService.IsInstanceUpgradeable`
- `google.cloud.notebooks.v1.NotebookService.ListEnvironments`
- `google.cloud.notebooks.v1.NotebookService.ListExecutions`
- `google.cloud.notebooks.v1.NotebookService.ListInstances`
- `google.cloud.notebooks.v1.NotebookService.ListSchedules`
- `google.cloud.notebooks.v1.NotebookService.RegisterInstance`
- `google.cloud.notebooks.v1.NotebookService.ResetInstance`
- `google.cloud.notebooks.v1.NotebookService.RollbackInstance`
- `google.cloud.notebooks.v1.NotebookService.SetInstanceAccelerator`
- `google.cloud.notebooks.v1.NotebookService.SetInstanceLabels`
- `google.cloud.notebooks.v1.NotebookService.SetInstanceMachineType`
- `google.cloud.notebooks.v1.NotebookService.StartInstance`
- `google.cloud.notebooks.v1.NotebookService.StopInstance`
- `google.cloud.notebooks.v1.NotebookService.UpdateInstanceConfig`
- `google.cloud.notebooks.v1.NotebookService.UpdateInstanceMetadataItems`
- `google.cloud.notebooks.v1.NotebookService.UpdateShieldedInstanceConfig`
- `google.cloud.notebooks.v1.NotebookService.UpgradeInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.CreateEnvironment`
- `google.cloud.notebooks.v1beta1.NotebookService.CreateInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.DeleteEnvironment`
- `google.cloud.notebooks.v1beta1.NotebookService.DeleteInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.GetEnvironment`
- `google.cloud.notebooks.v1beta1.NotebookService.GetInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.ListEnvironments`
- `google.cloud.notebooks.v1beta1.NotebookService.ListInstances`
- `google.cloud.notebooks.v1beta1.NotebookService.RegisterInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.ResetInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.SetInstanceAccelerator`
- `google.cloud.notebooks.v1beta1.NotebookService.SetInstanceLabels`
- `google.cloud.notebooks.v1beta1.NotebookService.SetInstanceMachineType`
- `google.cloud.notebooks.v1beta1.NotebookService.StartInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.StopInstance`
- `google.cloud.notebooks.v1beta1.NotebookService.UpgradeInstance`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### OAuth 2.0

#### `serviceName`

- `oauth2.googleapis.com`

#### `methodName`

- `google.identity.oauth2.GetToken`
- `google.identity.oauth2.GetTokenInfo`
- `google.identity.oauth2.RevokeToken`

### On-Demand Scanning

#### `serviceName`

- `ondemandscanning.googleapis.com`

#### `methodName`

- `google.cloud.ondemandscanning.v1.ScannerService.AnalyzePackages`
- `google.cloud.ondemandscanning.v1.ScannerService.ListVulnerabilities`
- `google.cloud.ondemandscanning.v1beta1.ScannerService.AnalyzePackages`
- `google.cloud.ondemandscanning.v1beta1.ScannerService.ListVulnerabilities`

### Cloud OS Config

#### `serviceName`

- `osconfig.googleapis.com`

#### `methodName`

- `google.cloud.osconfig.v1.OsConfigService.CancelPatchJob`
- `google.cloud.osconfig.v1.OsConfigService.CreatePatchDeployment`
- `google.cloud.osconfig.v1.OsConfigService.DeletePatchDeployment`
- `google.cloud.osconfig.v1.OsConfigService.ExecutePatchJob`
- `google.cloud.osconfig.v1.OsConfigService.GetPatchDeployment`
- `google.cloud.osconfig.v1.OsConfigService.GetPatchJob`
- `google.cloud.osconfig.v1.OsConfigService.ListPatchDeployments`
- `google.cloud.osconfig.v1.OsConfigService.ListPatchJobInstanceDetails`
- `google.cloud.osconfig.v1.OsConfigService.ListPatchJobs`
- `google.cloud.osconfig.v1.OsConfigService.PausePatchDeployment`
- `google.cloud.osconfig.v1.OsConfigService.ResumePatchDeployment`
- `google.cloud.osconfig.v1.OsConfigService.UpdatePatchDeployment`
- `google.cloud.osconfig.v1.OsConfigZonalService.CreateOSPolicyAssignment`
- `google.cloud.osconfig.v1.OsConfigZonalService.DeleteOSPolicyAssignment`
- `google.cloud.osconfig.v1.OsConfigZonalService.GetInventory`
- `google.cloud.osconfig.v1.OsConfigZonalService.GetOSPolicyAssignment`
- `google.cloud.osconfig.v1.OsConfigZonalService.GetOSPolicyAssignmentReport`
- `google.cloud.osconfig.v1.OsConfigZonalService.GetVulnerabilityReport`
- `google.cloud.osconfig.v1.OsConfigZonalService.ListInventories`
- `google.cloud.osconfig.v1.OsConfigZonalService.ListOSPolicyAssignmentReports`
- `google.cloud.osconfig.v1.OsConfigZonalService.ListOSPolicyAssignmentRevisions`
- `google.cloud.osconfig.v1.OsConfigZonalService.ListOSPolicyAssignments`
- `google.cloud.osconfig.v1.OsConfigZonalService.ListVulnerabilityReports`
- `google.cloud.osconfig.v1.OsConfigZonalService.UpdateOSPolicyAssignment`
- `google.cloud.osconfig.v1beta.OsConfigService.CancelPatchJob`
- `google.cloud.osconfig.v1beta.OsConfigService.CreateGuestPolicy`
- `google.cloud.osconfig.v1beta.OsConfigService.CreatePatchDeployment`
- `google.cloud.osconfig.v1beta.OsConfigService.DeleteGuestPolicy`
- `google.cloud.osconfig.v1beta.OsConfigService.DeletePatchDeployment`
- `google.cloud.osconfig.v1beta.OsConfigService.ExecutePatchJob`
- `google.cloud.osconfig.v1beta.OsConfigService.GetGuestPolicy`
- `google.cloud.osconfig.v1beta.OsConfigService.GetPatchDeployment`
- `google.cloud.osconfig.v1beta.OsConfigService.GetPatchJob`
- `google.cloud.osconfig.v1beta.OsConfigService.ListGuestPolicies`
- `google.cloud.osconfig.v1beta.OsConfigService.ListPatchDeployments`
- `google.cloud.osconfig.v1beta.OsConfigService.ListPatchJobInstanceDetails`
- `google.cloud.osconfig.v1beta.OsConfigService.ListPatchJobs`
- `google.cloud.osconfig.v1beta.OsConfigService.PausePatchDeployment`
- `google.cloud.osconfig.v1beta.OsConfigService.ResumePatchDeployment`
- `google.cloud.osconfig.v1beta.OsConfigService.UpdateGuestPolicy`
- `google.cloud.osconfig.v1beta.OsConfigService.UpdatePatchDeployment`

### Cloud OS Login

#### `serviceName`

- `oslogin.googleapis.com`

#### `methodName`

- `google.cloud.oslogin.v1.OsLoginService.CheckPolicy`
- `google.cloud.oslogin.v1.OsLoginService.ContinueSession`
- `google.cloud.oslogin.v1.OsLoginService.ImportSshPublicKey`
- `google.cloud.oslogin.v1.OsLoginService.StartSession`
- `google.cloud.oslogin.v1beta.OsLoginService.CheckPolicy`
- `google.cloud.oslogin.v1beta.OsLoginService.ContinueSession`
- `google.cloud.oslogin.v1beta.OsLoginService.ImportSshPublicKey`
- `google.cloud.oslogin.v1beta.OsLoginService.StartSession`

### Certificate Authority

#### `serviceName`

- `privateca.googleapis.com`

#### `methodName`

- `GetIamPolicy`
- `SetIamPolicy`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.ActivateCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.CreateCaPool`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.CreateCertificate`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.CreateCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.CreateCertificateTemplate`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.DeleteCaPool`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.DeleteCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.DeleteCertificateTemplate`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.DisableCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.EnableCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.FetchCaCerts`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.FetchCertificateAuthorityCsr`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.GetCaPool`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.GetCertificate`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.GetCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.GetCertificateRevocationList`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.GetCertificateTemplate`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.ListCaPools`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.ListCertificateAuthorities`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.ListCertificateRevocationLists`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.ListCertificateTemplates`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.ListCertificates`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.RevokeCertificate`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.UndeleteCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.UpdateCaPool`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.UpdateCertificate`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.UpdateCertificateAuthority`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.UpdateCertificateRevocationList`
- `google.cloud.security.privateca.v1.CertificateAuthorityService.UpdateCertificateTemplate`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ActivateCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateCertificate`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.DisableCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.EnableCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.FetchCertificateAuthorityCsr`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificate`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateRevocationList`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetReusableConfig`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateAuthorities`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateRevocationLists`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificates`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.RestoreCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.RevokeCertificate`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ScheduleDeleteCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificate`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificateAuthority`
- `google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificateRevocationList`

### Cloud Pub/Sub

#### `serviceName`

- `pubsub.googleapis.com`

#### `methodName`

- `google.iam.v1.IAMPolicy.GetIamPolicy`
- `google.iam.v1.IAMPolicy.SetIamPolicy`
- `google.pubsub.v1.Publisher.CreateTopic`
- `google.pubsub.v1.Publisher.DeleteTopic`
- `google.pubsub.v1.Publisher.DetachSubscription`
- `google.pubsub.v1.Publisher.GetTopic`
- `google.pubsub.v1.Publisher.ListTopicSnapshots`
- `google.pubsub.v1.Publisher.ListTopicSubscriptions`
- `google.pubsub.v1.Publisher.ListTopics`
- `google.pubsub.v1.Publisher.UpdateTopic`
- `google.pubsub.v1.SchemaService.CreateSchema`
- `google.pubsub.v1.SchemaService.DeleteSchema`
- `google.pubsub.v1.SchemaService.GetSchema`
- `google.pubsub.v1.SchemaService.ListSchemas`
- `google.pubsub.v1.SchemaService.ValidateMessage`
- `google.pubsub.v1.SchemaService.ValidateSchema`
- `google.pubsub.v1.Subscriber.CreateSnapshot`
- `google.pubsub.v1.Subscriber.CreateSubscription`
- `google.pubsub.v1.Subscriber.DeleteSnapshot`
- `google.pubsub.v1.Subscriber.DeleteSubscription`
- `google.pubsub.v1.Subscriber.GetSnapshot`
- `google.pubsub.v1.Subscriber.GetSubscription`
- `google.pubsub.v1.Subscriber.ListSnapshots`
- `google.pubsub.v1.Subscriber.ListSubscriptions`
- `google.pubsub.v1.Subscriber.ModifyPushConfig`
- `google.pubsub.v1.Subscriber.Seek`
- `google.pubsub.v1.Subscriber.UpdateSnapshot`
- `google.pubsub.v1.Subscriber.UpdateSubscription`
- `google.pubsub.v1beta2.Publisher.CreateTopic`
- `google.pubsub.v1beta2.Publisher.DeleteTopic`
- `google.pubsub.v1beta2.Publisher.GetTopic`
- `google.pubsub.v1beta2.Publisher.ListTopics`
- `google.pubsub.v1beta2.Subscriber.CreateSubscription`
- `google.pubsub.v1beta2.Subscriber.DeleteSubscription`
- `google.pubsub.v1beta2.Subscriber.GetSubscription`
- `google.pubsub.v1beta2.Subscriber.ListSubscriptions`
- `google.pubsub.v1beta2.Subscriber.ModifyPushConfig`

### Pub/Sub Lite

#### `serviceName`

- `pubsublite.googleapis.com`

#### `methodName`

- `google.cloud.pubsublite.v1.AdminService.CreateReservation`
- `google.cloud.pubsublite.v1.AdminService.CreateSubscription`
- `google.cloud.pubsublite.v1.AdminService.CreateTopic`
- `google.cloud.pubsublite.v1.AdminService.DeleteReservation`
- `google.cloud.pubsublite.v1.AdminService.DeleteSubscription`
- `google.cloud.pubsublite.v1.AdminService.DeleteTopic`
- `google.cloud.pubsublite.v1.AdminService.GetReservation`
- `google.cloud.pubsublite.v1.AdminService.GetSubscription`
- `google.cloud.pubsublite.v1.AdminService.GetTopic`
- `google.cloud.pubsublite.v1.AdminService.GetTopicPartitions`
- `google.cloud.pubsublite.v1.AdminService.ListReservationTopics`
- `google.cloud.pubsublite.v1.AdminService.ListReservations`
- `google.cloud.pubsublite.v1.AdminService.ListSubscriptions`
- `google.cloud.pubsublite.v1.AdminService.ListTopicSubscriptions`
- `google.cloud.pubsublite.v1.AdminService.ListTopics`
- `google.cloud.pubsublite.v1.AdminService.SeekSubscription`
- `google.cloud.pubsublite.v1.AdminService.UpdateReservation`
- `google.cloud.pubsublite.v1.AdminService.UpdateSubscription`
- `google.cloud.pubsublite.v1.AdminService.UpdateTopic`
- `google.cloud.pubsublite.v1.CursorService.CommitCursor`
- `google.cloud.pubsublite.v1.CursorService.ListPartitionCursors`
- `google.cloud.pubsublite.v1.CursorService.StreamingCommitCursor`
- `google.cloud.pubsublite.v1.PublisherService.Publish`
- `google.cloud.pubsublite.v1.SubscriberService.Subscribe`
- `google.cloud.pubsublite.v1.TopicStatsService.ComputeHeadCursor`
- `google.cloud.pubsublite.v1.TopicStatsService.ComputeMessageStats`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### reCAPTCHA Enterprise

#### `serviceName`

- `recaptchaenterprise.googleapis.com`

#### `methodName`

- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AnnotateAssessment`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateAssessment`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateKey`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteKey`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetKey`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetMetrics`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetProjectMetadata`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListKeys`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.MigrateKey`
- `google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateKey`
- `google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.CreateAssessment`

### Recommendations AI

#### `serviceName`

- `recommendationengine.googleapis.com`

#### `methodName`

- `google.cloud.recommendationengine.v1beta1.CatalogService.CreateCatalogItem`
- `google.cloud.recommendationengine.v1beta1.CatalogService.DeleteCatalogItem`
- `google.cloud.recommendationengine.v1beta1.CatalogService.GetCatalogItem`
- `google.cloud.recommendationengine.v1beta1.CatalogService.ImportCatalogItems`
- `google.cloud.recommendationengine.v1beta1.CatalogService.ListCatalogItems`
- `google.cloud.recommendationengine.v1beta1.CatalogService.UpdateCatalogItem`
- `google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry.CreatePredictionApiKeyRegistration`
- `google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry.DeletePredictionApiKeyRegistration`
- `google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry.ListPredictionApiKeyRegistrations`
- `google.cloud.recommendationengine.v1beta1.PredictionService.Predict`
- `google.cloud.recommendationengine.v1beta1.UserEventService.ImportUserEvents`
- `google.cloud.recommendationengine.v1beta1.UserEventService.ListUserEvents`
- `google.cloud.recommendationengine.v1beta1.UserEventService.PurgeUserEvents`
- `google.cloud.recommendationengine.v1beta1.UserEventService.RejoinUserEvents`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Recommender

#### `serviceName`

- `recommender.googleapis.com`

#### `methodName`

- `google.cloud.recommender.v1beta1.Recommender.GetInsightTypeConfig`
- `google.cloud.recommender.v1beta1.Recommender.GetRecommenderConfig`
- `google.cloud.recommender.v1beta1.Recommender.UpdateInsightTypeConfig`
- `google.cloud.recommender.v1beta1.Recommender.UpdateRecommenderConfig`

### Cloud Memorystore for Redis

#### `serviceName`

- `redis.googleapis.com`

#### `methodName`

- `google.cloud.redis.v1.CloudRedis.CreateInstance`
- `google.cloud.redis.v1.CloudRedis.DeleteInstance`
- `google.cloud.redis.v1.CloudRedis.ExportInstance`
- `google.cloud.redis.v1.CloudRedis.FailoverInstance`
- `google.cloud.redis.v1.CloudRedis.GetInstance`
- `google.cloud.redis.v1.CloudRedis.GetInstanceAuthString`
- `google.cloud.redis.v1.CloudRedis.ImportInstance`
- `google.cloud.redis.v1.CloudRedis.ListInstances`
- `google.cloud.redis.v1.CloudRedis.RescheduleMaintenance`
- `google.cloud.redis.v1.CloudRedis.UpdateInstance`
- `google.cloud.redis.v1.CloudRedis.UpgradeInstance`
- `google.cloud.redis.v1beta1.CloudRedis.CreateInstance`
- `google.cloud.redis.v1beta1.CloudRedis.DeleteInstance`
- `google.cloud.redis.v1beta1.CloudRedis.ExportInstance`
- `google.cloud.redis.v1beta1.CloudRedis.FailoverInstance`
- `google.cloud.redis.v1beta1.CloudRedis.GetInstance`
- `google.cloud.redis.v1beta1.CloudRedis.GetInstanceAuthString`
- `google.cloud.redis.v1beta1.CloudRedis.ImportInstance`
- `google.cloud.redis.v1beta1.CloudRedis.ListInstances`
- `google.cloud.redis.v1beta1.CloudRedis.RescheduleMaintenance`
- `google.cloud.redis.v1beta1.CloudRedis.UpdateInstance`
- `google.cloud.redis.v1beta1.CloudRedis.UpgradeInstance`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`

### Remote Build Execution

#### `serviceName`

- `remotebuildexecution.googleapis.com`

#### `methodName`

- `build.bazel.remote.execution.v2.ActionCache.GetActionResult`
- `build.bazel.remote.execution.v2.ActionCache.UpdateActionResult`
- `build.bazel.remote.execution.v2.ContentAddressableStorage.BatchReadBlobs`
- `build.bazel.remote.execution.v2.ContentAddressableStorage.BatchUpdateBlobs`
- `build.bazel.remote.execution.v2.ContentAddressableStorage.FindMissingBlobs`
- `build.bazel.remote.execution.v2.ContentAddressableStorage.GetTree`
- `build.bazel.remote.execution.v2.Execution.Execute`
- `build.bazel.remote.execution.v2.Execution.WaitExecution`
- `google.bytestream.ByteStream.QueryWriteStatus`
- `google.bytestream.ByteStream.Read`
- `google.bytestream.ByteStream.Write`
- `google.devtools.remoteworkers.v1test2.Bots.CreateBotSession`
- `google.devtools.remoteworkers.v1test2.Bots.UpdateBotSession`
- `google.devtools.remoteworkers.v1test2.Reservations.CancelReservation`
- `google.devtools.remoteworkers.v1test2.Reservations.CreateReservation`
- `google.devtools.remoteworkers.v1test2.Reservations.GetReservation`

### Resource Settings

#### `serviceName`

- `resourcesettings.googleapis.com`

#### `methodName`

- `google.cloud.resourcesettings.v1.ResourceSettingsService.GetSetting`
- `google.cloud.resourcesettings.v1.ResourceSettingsService.ListSettings`
- `google.cloud.resourcesettings.v1.ResourceSettingsService.UpdateSetting`

### Cloud Retail

#### `serviceName`

- `retail.googleapis.com`

#### `methodName`

- `google.cloud.retail.v2.CatalogService.GetDefaultBranch`
- `google.cloud.retail.v2.CatalogService.ListCatalogs`
- `google.cloud.retail.v2.CatalogService.SetDefaultBranch`
- `google.cloud.retail.v2.CatalogService.UpdateCatalog`
- `google.cloud.retail.v2.CompletionService.CompleteQuery`
- `google.cloud.retail.v2.CompletionService.ImportCompletionData`
- `google.cloud.retail.v2.PredictionService.Predict`
- `google.cloud.retail.v2.ProductService.AddFulfillmentPlaces`
- `google.cloud.retail.v2.ProductService.AddLocalInventories`
- `google.cloud.retail.v2.ProductService.CreateProduct`
- `google.cloud.retail.v2.ProductService.DeleteProduct`
- `google.cloud.retail.v2.ProductService.GetProduct`
- `google.cloud.retail.v2.ProductService.ImportProducts`
- `google.cloud.retail.v2.ProductService.ListProducts`
- `google.cloud.retail.v2.ProductService.RemoveFulfillmentPlaces`
- `google.cloud.retail.v2.ProductService.RemoveLocalInventories`
- `google.cloud.retail.v2.ProductService.SetInventory`
- `google.cloud.retail.v2.ProductService.UpdateProduct`
- `google.cloud.retail.v2.SearchService.Search`
- `google.cloud.retail.v2.UserEventService.ImportUserEvents`
- `google.cloud.retail.v2.UserEventService.PurgeUserEvents`
- `google.cloud.retail.v2.UserEventService.RejoinUserEvents`
- `google.cloud.retail.v2.UserEventService.WriteUserEvent`
- `google.cloud.retail.v2beta.CatalogService.AddCatalogAttribute`
- `google.cloud.retail.v2beta.CatalogService.GetAttributesConfig`
- `google.cloud.retail.v2beta.CatalogService.GetCompletionConfig`
- `google.cloud.retail.v2beta.CatalogService.GetDefaultBranch`
- `google.cloud.retail.v2beta.CatalogService.ListCatalogs`
- `google.cloud.retail.v2beta.CatalogService.RemoveCatalogAttribute`
- `google.cloud.retail.v2beta.CatalogService.ReplaceCatalogAttribute`
- `google.cloud.retail.v2beta.CatalogService.SetDefaultBranch`
- `google.cloud.retail.v2beta.CatalogService.UpdateAttributesConfig`
- `google.cloud.retail.v2beta.CatalogService.UpdateCatalog`
- `google.cloud.retail.v2beta.CatalogService.UpdateCompletionConfig`
- `google.cloud.retail.v2beta.CompletionService.CompleteQuery`
- `google.cloud.retail.v2beta.CompletionService.ImportCompletionData`
- `google.cloud.retail.v2beta.ControlService.CreateControl`
- `google.cloud.retail.v2beta.ControlService.DeleteControl`
- `google.cloud.retail.v2beta.ControlService.GetControl`
- `google.cloud.retail.v2beta.ControlService.ListControls`
- `google.cloud.retail.v2beta.ControlService.UpdateControl`
- `google.cloud.retail.v2beta.PredictionService.Predict`
- `google.cloud.retail.v2beta.ProductService.AddFulfillmentPlaces`
- `google.cloud.retail.v2beta.ProductService.AddLocalInventories`
- `google.cloud.retail.v2beta.ProductService.CreateProduct`
- `google.cloud.retail.v2beta.ProductService.DeleteProduct`
- `google.cloud.retail.v2beta.ProductService.GetProduct`
- `google.cloud.retail.v2beta.ProductService.ImportProducts`
- `google.cloud.retail.v2beta.ProductService.ListProducts`
- `google.cloud.retail.v2beta.ProductService.RemoveFulfillmentPlaces`
- `google.cloud.retail.v2beta.ProductService.RemoveLocalInventories`
- `google.cloud.retail.v2beta.ProductService.SetInventory`
- `google.cloud.retail.v2beta.ProductService.UpdateProduct`
- `google.cloud.retail.v2beta.SearchService.Search`
- `google.cloud.retail.v2beta.ServingConfigService.AddControl`
- `google.cloud.retail.v2beta.ServingConfigService.CreateServingConfig`
- `google.cloud.retail.v2beta.ServingConfigService.DeleteServingConfig`
- `google.cloud.retail.v2beta.ServingConfigService.GetServingConfig`
- `google.cloud.retail.v2beta.ServingConfigService.ListServingConfigs`
- `google.cloud.retail.v2beta.ServingConfigService.RemoveControl`
- `google.cloud.retail.v2beta.ServingConfigService.UpdateServingConfig`
- `google.cloud.retail.v2beta.UserEventService.ImportUserEvents`
- `google.cloud.retail.v2beta.UserEventService.PurgeUserEvents`
- `google.cloud.retail.v2beta.UserEventService.RejoinUserEvents`
- `google.cloud.retail.v2beta.UserEventService.WriteUserEvent`

### Cloud Run

#### `serviceName`

- `run.googleapis.com`

#### `methodName`

- `google.cloud.location.Locations.ListLocations`
- `google.cloud.run.op.v2.Jobs.CreateJob`
- `google.cloud.run.op.v2.Jobs.DeleteJob`
- `google.cloud.run.op.v2.Jobs.UpdateJob`
- `google.cloud.run.op.v2.Revisions.DeleteRevision`
- `google.cloud.run.op.v2.Revisions.GetRevision`
- `google.cloud.run.op.v2.Revisions.ListRevisions`
- `google.cloud.run.op.v2.Services.GetIamPolicy`
- `google.cloud.run.op.v2.Services.GetService`
- `google.cloud.run.op.v2.Services.ListServices`
- `google.cloud.run.op.v2.Services.SetIamPolicy`
- `google.cloud.run.v1.AuthorizedDomains.ListAuthorizedDomains`
- `google.cloud.run.v1.Configurations.DeleteConfiguration`
- `google.cloud.run.v1.Configurations.GetConfiguration`
- `google.cloud.run.v1.Configurations.ListConfigurations`
- `google.cloud.run.v1.DomainMappings.CreateDomainMapping`
- `google.cloud.run.v1.DomainMappings.DeleteDomainMapping`
- `google.cloud.run.v1.DomainMappings.GetDomainMapping`
- `google.cloud.run.v1.DomainMappings.ListDomainMappings`
- `google.cloud.run.v1.Jobs.RunJobPubSub`
- `google.cloud.run.v1.Revisions.DeleteRevision`
- `google.cloud.run.v1.Revisions.GetRevision`
- `google.cloud.run.v1.Revisions.ListRevisions`
- `google.cloud.run.v1.Routes.DeleteRoute`
- `google.cloud.run.v1.Routes.GetRoute`
- `google.cloud.run.v1.Routes.ListRoutes`
- `google.cloud.run.v1.Services.CreateService`
- `google.cloud.run.v1.Services.DeleteService`
- `google.cloud.run.v1.Services.GetIamPolicy`
- `google.cloud.run.v1.Services.GetService`
- `google.cloud.run.v1.Services.ListServices`
- `google.cloud.run.v1.Services.ReplaceService`
- `google.cloud.run.v1.Services.SetIamPolicy`
- `google.cloud.run.v2.Jobs.CreateJob`
- `google.cloud.run.v2.Jobs.DeleteJob`
- `google.cloud.run.v2.Jobs.UpdateJob`
- `google.cloud.run.v2.Revisions.DeleteRevision`
- `google.cloud.run.v2.Revisions.GetRevision`
- `google.cloud.run.v2.Revisions.ListRevisions`
- `google.cloud.run.v2.Services.CreateService`
- `google.cloud.run.v2.Services.DeleteService`
- `google.cloud.run.v2.Services.GetIamPolicy`
- `google.cloud.run.v2.Services.GetService`
- `google.cloud.run.v2.Services.ListServices`
- `google.cloud.run.v2.Services.SetIamPolicy`
- `google.cloud.run.v2.Services.UpdateService`

### Secret Manager

#### `serviceName`

- `secretmanager.googleapis.com`

#### `methodName`

- `google.cloud.location.Locations.GetLocation`
- `google.cloud.location.Locations.ListLocations`
- `google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion`
- `google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion`
- `google.cloud.secretmanager.v1.SecretManagerService.CreateSecret`
- `google.cloud.secretmanager.v1.SecretManagerService.DeleteSecret`
- `google.cloud.secretmanager.v1.SecretManagerService.DestroySecretVersion`
- `google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion`
- `google.cloud.secretmanager.v1.SecretManagerService.EnableSecretVersion`
- `google.cloud.secretmanager.v1.SecretManagerService.GetIamPolicy`
- `google.cloud.secretmanager.v1.SecretManagerService.GetSecret`
- `google.cloud.secretmanager.v1.SecretManagerService.GetSecretVersion`
- `google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions`
- `google.cloud.secretmanager.v1.SecretManagerService.ListSecrets`
- `google.cloud.secretmanager.v1.SecretManagerService.SetIamPolicy`
- `google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret`
- `google.cloud.secrets.v1beta1.SecretManagerService.AccessSecretVersion`
- `google.cloud.secrets.v1beta1.SecretManagerService.AddSecretVersion`
- `google.cloud.secrets.v1beta1.SecretManagerService.CreateSecret`
- `google.cloud.secrets.v1beta1.SecretManagerService.DeleteSecret`
- `google.cloud.secrets.v1beta1.SecretManagerService.DestroySecretVersion`
- `google.cloud.secrets.v1beta1.SecretManagerService.DisableSecretVersion`
- `google.cloud.secrets.v1beta1.SecretManagerService.EnableSecretVersion`
- `google.cloud.secrets.v1beta1.SecretManagerService.GetIamPolicy`
- `google.cloud.secrets.v1beta1.SecretManagerService.GetSecret`
- `google.cloud.secrets.v1beta1.SecretManagerService.GetSecretVersion`
- `google.cloud.secrets.v1beta1.SecretManagerService.ListSecretVersions`
- `google.cloud.secrets.v1beta1.SecretManagerService.ListSecrets`
- `google.cloud.secrets.v1beta1.SecretManagerService.SetIamPolicy`
- `google.cloud.secrets.v1beta1.SecretManagerService.UpdateSecret`

### Security Command Center

#### `serviceName`

- `securitycenter.googleapis.com`

#### `methodName`

- `google.cloud.securitycenter.settings.v1beta2.Settings.CalculateContainerThreatDetectionSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.CalculateEventThreatDetectionSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.CalculateSecurityHealthAnalyticsSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.CalculateWebSecurityScannerSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.GetContainerThreatDetectionSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.GetEventThreatDetectionSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.GetSecurityCenterSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.GetSecurityHealthAnalyticsSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.GetSubscription`
- `google.cloud.securitycenter.settings.v1beta2.Settings.GetUserInterfaceMetadata`
- `google.cloud.securitycenter.settings.v1beta2.Settings.GetWebSecurityScannerSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.InitializeSecurityCenterSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.UpdateContainerThreatDetectionSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.UpdateEventThreatDetectionSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.UpdateSecurityCenterSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.UpdateSecurityHealthAnalyticsSettings`
- `google.cloud.securitycenter.settings.v1beta2.Settings.UpdateWebSecurityScannerSettings`
- `google.cloud.securitycenter.v1.SecurityCenter.BulkMuteFindings`
- `google.cloud.securitycenter.v1.SecurityCenter.CancelFindingResponse`
- `google.cloud.securitycenter.v1.SecurityCenter.CreateFinding`
- `google.cloud.securitycenter.v1.SecurityCenter.CreateMuteConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.CreateNotificationConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.CreateSource`
- `google.cloud.securitycenter.v1.SecurityCenter.DeleteMuteConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.DeleteNotificationConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.GetBigQueryExport`
- `google.cloud.securitycenter.v1.SecurityCenter.GetFindingResponse`
- `google.cloud.securitycenter.v1.SecurityCenter.GetIamPolicy`
- `google.cloud.securitycenter.v1.SecurityCenter.GetMuteConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.GetNotificationConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.GetOrganizationSettings`
- `google.cloud.securitycenter.v1.SecurityCenter.GetSource`
- `google.cloud.securitycenter.v1.SecurityCenter.GroupAssets`
- `google.cloud.securitycenter.v1.SecurityCenter.GroupFindings`
- `google.cloud.securitycenter.v1.SecurityCenter.InvokeFindingResponse`
- `google.cloud.securitycenter.v1.SecurityCenter.ListAssets`
- `google.cloud.securitycenter.v1.SecurityCenter.ListFindingResponses`
- `google.cloud.securitycenter.v1.SecurityCenter.ListFindings`
- `google.cloud.securitycenter.v1.SecurityCenter.ListMuteConfigs`
- `google.cloud.securitycenter.v1.SecurityCenter.ListNotificationConfigs`
- `google.cloud.securitycenter.v1.SecurityCenter.ListSources`
- `google.cloud.securitycenter.v1.SecurityCenter.SetFindingState`
- `google.cloud.securitycenter.v1.SecurityCenter.SetIamPolicy`
- `google.cloud.securitycenter.v1.SecurityCenter.SetMute`
- `google.cloud.securitycenter.v1.SecurityCenter.UpdateExternalSystem`
- `google.cloud.securitycenter.v1.SecurityCenter.UpdateFinding`
- `google.cloud.securitycenter.v1.SecurityCenter.UpdateMuteConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.UpdateNotificationConfig`
- `google.cloud.securitycenter.v1.SecurityCenter.UpdateOrganizationSettings`
- `google.cloud.securitycenter.v1.SecurityCenter.UpdateSecurityMarks`
- `google.cloud.securitycenter.v1.SecurityCenter.UpdateSource`
- `google.cloud.securitycenter.v1beta1.SecurityCenter.CreateFinding`
- `google.cloud.securitycenter.v1beta1.SecurityCenter.ListAssets`
- `google.cloud.securitycenter.v1beta1.SecurityCenter.ListFindings`
- `google.cloud.securitycenter.v1beta1.SecurityCenter.ListSources`
- `google.cloud.securitycenter.v1beta1.SecurityCenter.SetFindingState`
- `google.cloud.securitycenter.v1beta1.SecurityCenter.UpdateSecurityMarks`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.CreateFinding`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.CreateNotificationConfig`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.CreateSource`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.DeleteNotificationConfig`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.GetIamPolicy`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.GetNotificationConfig`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.GetOrganizationSettings`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.GetSource`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.GroupAssets`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.GroupFindings`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.InitializeAssetDiscoveryServiceAccount`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.ListAssets`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.ListFindings`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.ListNotificationConfigs`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.ListSources`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.SetFindingState`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.SetIamPolicy`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.UpdateFinding`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.UpdateNotificationConfig`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.UpdateOrganizationSettings`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.UpdateSecurityMarks`
- `google.cloud.securitycenter.v1p1beta1.SecurityCenter.UpdateSource`

### Service Consumer Management

#### `serviceName`

- `serviceconsumermanagement.googleapis.com`

#### `methodName`

- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.AddVisibilityLabels`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.CreateProducerOverride`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.DeleteProducerOverride`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.DisableConsumer`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.EnableConsumer`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.ImportProducerOverrides`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.RemoveVisibilityLabels`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.UpdateProducerOverride`
- `google.api.serviceconsumermanagement.v1beta1.ServiceConsumerManager.UpdateProperty`
- `google.longrunning.Operations.GetOperation`

### Service Directory

#### `serviceName`

- `servicedirectory.googleapis.com`

#### `methodName`

- `google.cloud.location.Locations.GetLocation`
- `google.cloud.location.Locations.ListLocations`
- `google.cloud.servicedirectory.v1.LookupService.ResolveService`
- `google.cloud.servicedirectory.v1.RegistrationService.CreateEndpoint`
- `google.cloud.servicedirectory.v1.RegistrationService.CreateNamespace`
- `google.cloud.servicedirectory.v1.RegistrationService.CreateService`
- `google.cloud.servicedirectory.v1.RegistrationService.DeleteEndpoint`
- `google.cloud.servicedirectory.v1.RegistrationService.DeleteNamespace`
- `google.cloud.servicedirectory.v1.RegistrationService.DeleteService`
- `google.cloud.servicedirectory.v1.RegistrationService.GetEndpoint`
- `google.cloud.servicedirectory.v1.RegistrationService.GetIamPolicy`
- `google.cloud.servicedirectory.v1.RegistrationService.GetNamespace`
- `google.cloud.servicedirectory.v1.RegistrationService.GetService`
- `google.cloud.servicedirectory.v1.RegistrationService.ListEndpoints`
- `google.cloud.servicedirectory.v1.RegistrationService.ListNamespaces`
- `google.cloud.servicedirectory.v1.RegistrationService.ListServices`
- `google.cloud.servicedirectory.v1.RegistrationService.SetIamPolicy`
- `google.cloud.servicedirectory.v1.RegistrationService.UpdateEndpoint`
- `google.cloud.servicedirectory.v1.RegistrationService.UpdateNamespace`
- `google.cloud.servicedirectory.v1.RegistrationService.UpdateService`
- `google.cloud.servicedirectory.v1beta1.LookupService.ResolveService`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.CreateEndpoint`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.CreateNamespace`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.CreateService`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteEndpoint`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteNamespace`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteService`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.GetEndpoint`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.GetIamPolicy`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.GetNamespace`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.GetService`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.ListEndpoints`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.ListNamespaces`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.ListServices`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.SetIamPolicy`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateEndpoint`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateNamespace`
- `google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateService`

### Service Management

#### `serviceName`

- `servicemanagement.googleapis.com`

#### `methodName`

- `google.api.servicemanagement.v1.ServiceManager.ActivateServices`
- `google.api.servicemanagement.v1.ServiceManager.CreateService`
- `google.api.servicemanagement.v1.ServiceManager.CreateServiceConfig`
- `google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout`
- `google.api.servicemanagement.v1.ServiceManager.DeleteService`
- `google.api.servicemanagement.v1.ServiceManager.EnableService`
- `google.api.servicemanagement.v1.ServiceManager.SubmitConfigSource`
- `google.api.servicemanagement.v1.ServiceManager.UndeleteService`
- `google.iam.v1.IAMPolicy.GetIamPolicy`
- `google.iam.v1.IAMPolicy.SetIamPolicy`
- `google.longrunning.Operations.GetOperation`

### Service Usage

#### `serviceName`

- `serviceusage.googleapis.com`

#### `methodName`

- `google.api.serviceusage.v1.ServiceUsage.BatchEnableServices`
- `google.api.serviceusage.v1.ServiceUsage.DisableService`
- `google.api.serviceusage.v1.ServiceUsage.EnableService`
- `google.api.serviceusage.v1beta1.ServiceUsage.BatchEnableServices`
- `google.api.serviceusage.v1beta1.ServiceUsage.CreateAdminOverride`
- `google.api.serviceusage.v1beta1.ServiceUsage.CreateConsumerOverride`
- `google.api.serviceusage.v1beta1.ServiceUsage.DeleteConsumerOverride`
- `google.api.serviceusage.v1beta1.ServiceUsage.DisableService`
- `google.api.serviceusage.v1beta1.ServiceUsage.EnableService`
- `google.api.serviceusage.v1beta1.ServiceUsage.ImportAdminOverrides`
- `google.api.serviceusage.v1beta1.ServiceUsage.ImportConsumerOverrides`
- `google.api.serviceusage.v1beta1.ServiceUsage.UpdateConsumerOverride`
- `google.api.serviceusage.v2.ServiceUsage.UpdateConsumerPolicy`
- `google.longrunning.Operations.GetOperation`

### Cloud Source Repositories

#### `serviceName`

- `sourcerepo.googleapis.com`

#### `methodName`

- `google.devtools.sourcerepo.v1.Browser.Access`
- `google.devtools.sourcerepo.v1.GitProtocol.LsRemote`
- `google.devtools.sourcerepo.v1.GitProtocol.ReceivePack`
- `google.devtools.sourcerepo.v1.GitProtocol.UploadPack`
- `google.devtools.sourcerepo.v1.SourceRepo.CreateRepo`
- `google.devtools.sourcerepo.v1.SourceRepo.DeleteRepo`
- `google.devtools.sourcerepo.v1.SourceRepo.GetIamPolicy`
- `google.devtools.sourcerepo.v1.SourceRepo.GetProjectConfig`
- `google.devtools.sourcerepo.v1.SourceRepo.GetRepo`
- `google.devtools.sourcerepo.v1.SourceRepo.ListRepos`
- `google.devtools.sourcerepo.v1.SourceRepo.SetIamPolicy`
- `google.devtools.sourcerepo.v1.SourceRepo.UpdateProjectConfig`
- `google.devtools.sourcerepo.v1.SourceRepo.UpdateRepo`
- `google.longrunning.Operations.ListOperations`

### Cloud Spanner

#### `serviceName`

- `spanner.googleapis.com`

#### `methodName`

- `/Operations.CancelOperation`
- `/Operations.GetOperation`
- `/Operations.ListOperations`
- `google.cloud.keyvisualizer.KeyVisualizer.GetScan`
- `google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup`
- `google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase`
- `google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackup`
- `google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase`
- `google.spanner.admin.database.v1.DatabaseAdmin.GetBackup`
- `google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase`
- `google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl`
- `google.spanner.admin.database.v1.DatabaseAdmin.GetIamPolicy`
- `google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations`
- `google.spanner.admin.database.v1.DatabaseAdmin.ListBackups`
- `google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases`
- `google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase`
- `google.spanner.admin.database.v1.DatabaseAdmin.SetIamPolicy`
- `google.spanner.admin.database.v1.DatabaseAdmin.TestIamPermissions`
- `google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackup`
- `google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl`
- `google.spanner.admin.instance.v1.InstanceAdmin.CreateInstance`
- `google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance`
- `google.spanner.admin.instance.v1.InstanceAdmin.GetIamPolicy`
- `google.spanner.admin.instance.v1.InstanceAdmin.GetInstance`
- `google.spanner.admin.instance.v1.InstanceAdmin.GetInstanceConfig`
- `google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs`
- `google.spanner.admin.instance.v1.InstanceAdmin.ListInstances`
- `google.spanner.admin.instance.v1.InstanceAdmin.SetIamPolicy`
- `google.spanner.admin.instance.v1.InstanceAdmin.TestIamPermissions`
- `google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance`
- `google.spanner.v1.Spanner.BatchCreateSessions`
- `google.spanner.v1.Spanner.BeginTransaction`
- `google.spanner.v1.Spanner.Commit`
- `google.spanner.v1.Spanner.CreateSession`
- `google.spanner.v1.Spanner.DeleteSession`
- `google.spanner.v1.Spanner.ExecuteBatchDml`
- `google.spanner.v1.Spanner.ExecuteSql`
- `google.spanner.v1.Spanner.ExecuteStreamingSql`
- `google.spanner.v1.Spanner.GetSession`
- `google.spanner.v1.Spanner.ListSessions`
- `google.spanner.v1.Spanner.PartitionQuery`
- `google.spanner.v1.Spanner.PartitionRead`
- `google.spanner.v1.Spanner.Read`
- `google.spanner.v1.Spanner.Rollback`
- `google.spanner.v1.Spanner.StreamingRead`

### GCE Serial Port

#### `serviceName`

- `ssh-serialport.googleapis.com`

#### `methodName`

- `google.ssh-serialport.v1.connect`
- `google.ssh-serialport.v1.disconnect`

### Cloud Storage

#### `serviceName`

- `storage.googleapis.com`

#### `methodName`

- `storage.buckets.create`
- `storage.buckets.delete`
- `storage.buckets.get`
- `storage.buckets.list`
- `storage.buckets.update`
- `storage.getIamPermissions`
- `storage.hmacKeys.create`
- `storage.hmacKeys.delete`
- `storage.hmacKeys.get`
- `storage.hmacKeys.list`
- `storage.hmacKeys.update`
- `storage.multipartUploads.complete`
- `storage.multipartUploads.uploadPart`
- `storage.objects.create`
- `storage.objects.delete`
- `storage.objects.get`
- `storage.objects.list`
- `storage.objects.update`
- `storage.projects.getOrCreateServiceAccount`
- `storage.setIamPermissions`

### Security Token Service API

#### `serviceName`

- `sts.googleapis.com`

#### `methodName`

- `google.identity.sts.v1.SecurityTokenService.ExchangeToken`
- `google.identity.sts.v1beta.SecurityTokenService.ExchangeToken`

### Cloud TPU

#### `serviceName`

- `tpu.googleapis.com`

#### `methodName`

- `google.cloud.tpu.v1.Tpu.CreateNode`
- `google.cloud.tpu.v1.Tpu.DeleteNode`
- `google.cloud.tpu.v1.Tpu.GetNode`
- `google.cloud.tpu.v1.Tpu.ListNodes`
- `google.cloud.tpu.v1.Tpu.ReimageNode`
- `google.cloud.tpu.v1.Tpu.ResetNode`
- `google.cloud.tpu.v1.Tpu.StartNode`
- `google.cloud.tpu.v1.Tpu.StopNode`
- `google.cloud.tpu.v2.Tpu.DeleteNode`

### Traffic Director

#### `serviceName`

- `trafficdirector.googleapis.com`

#### `methodName`

- `envoy.service.discovery.v3.AggregatedDiscoveryService.StreamAggregatedResources`
- `envoy.service.load_stats.v3.LoadReportingService.StreamLoadStats`

### Cloud Translation

#### `serviceName`

- `translate.googleapis.com`

#### `methodName`

- `google.cloud.location.Locations.GetLocation`
- `google.cloud.location.Locations.ListLocations`
- `google.cloud.translation.v3.TranslationService.BatchSearchTranslationMemoryEntries`
- `google.cloud.translation.v3.TranslationService.BatchTranslateDocument`
- `google.cloud.translation.v3.TranslationService.BatchTranslateText`
- `google.cloud.translation.v3.TranslationService.BatchUpdateTranslationMemoryEntries`
- `google.cloud.translation.v3.TranslationService.CreateGlossary`
- `google.cloud.translation.v3.TranslationService.CreateTranslationMemory`
- `google.cloud.translation.v3.TranslationService.DeleteGlossary`
- `google.cloud.translation.v3.TranslationService.DeleteTranslationMemory`
- `google.cloud.translation.v3.TranslationService.DetectLanguage`
- `google.cloud.translation.v3.TranslationService.ExportTranslationMemoryEntries`
- `google.cloud.translation.v3.TranslationService.GetGlossary`
- `google.cloud.translation.v3.TranslationService.GetSupportedLanguages`
- `google.cloud.translation.v3.TranslationService.ImportTranslationMemoryEntries`
- `google.cloud.translation.v3.TranslationService.ListGlossaries`
- `google.cloud.translation.v3.TranslationService.ListTranslationMemories`
- `google.cloud.translation.v3.TranslationService.TranslateDocument`
- `google.cloud.translation.v3.TranslationService.TranslateText`
- `google.cloud.translation.v3beta1.TranslationService.BatchTranslateDocument`
- `google.cloud.translation.v3beta1.TranslationService.BatchTranslateText`
- `google.cloud.translation.v3beta1.TranslationService.CreateGlossary`
- `google.cloud.translation.v3beta1.TranslationService.DeleteGlossary`
- `google.cloud.translation.v3beta1.TranslationService.DetectLanguage`
- `google.cloud.translation.v3beta1.TranslationService.GetGlossary`
- `google.cloud.translation.v3beta1.TranslationService.GetSupportedLanguages`
- `google.cloud.translation.v3beta1.TranslationService.ListGlossaries`
- `google.cloud.translation.v3beta1.TranslationService.TranslateDocument`
- `google.cloud.translation.v3beta1.TranslationService.TranslateText`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`
- `google.longrunning.Operations.WaitOperation`

### Cloud Video Intelligence

#### `serviceName`

- `videointelligence.googleapis.com`

#### `methodName`

- `google.cloud.videointelligence.v1.VideoIntelligenceService.AnnotateVideo`
- `google.cloud.videointelligence.v1beta2.VideoIntelligenceService.AnnotateVideo`
- `google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService.AnnotateVideo`
- `google.cloud.videointelligence.v1p2beta1.VideoIntelligenceService.AnnotateVideo`
- `google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService.AnnotateVideo`

### Cloud Vision

#### `serviceName`

- `vision.googleapis.com`

#### `methodName`

- `ImageAnnotator.AsyncBatchAnnotateFiles`
- `google.cloud.vision.v1.ImageAnnotator.AsyncBatchAnnotateFiles`
- `google.cloud.vision.v1.ImageAnnotator.AsyncBatchAnnotateImages`
- `google.cloud.vision.v1.ImageAnnotator.BatchAnnotateFiles`
- `google.cloud.vision.v1.ImageAnnotator.BatchAnnotateImages`
- `google.cloud.vision.v1.ProductSearch.AddProductToProductSet`
- `google.cloud.vision.v1.ProductSearch.CreateProduct`
- `google.cloud.vision.v1.ProductSearch.CreateProductSet`
- `google.cloud.vision.v1.ProductSearch.CreateReferenceImage`
- `google.cloud.vision.v1.ProductSearch.DeleteProduct`
- `google.cloud.vision.v1.ProductSearch.DeleteProductSet`
- `google.cloud.vision.v1.ProductSearch.DeleteReferenceImage`
- `google.cloud.vision.v1.ProductSearch.GetProduct`
- `google.cloud.vision.v1.ProductSearch.GetProductSet`
- `google.cloud.vision.v1.ProductSearch.GetReferenceImage`
- `google.cloud.vision.v1.ProductSearch.ImportProductSets`
- `google.cloud.vision.v1.ProductSearch.ListProductSets`
- `google.cloud.vision.v1.ProductSearch.ListProducts`
- `google.cloud.vision.v1.ProductSearch.ListProductsInProductSet`
- `google.cloud.vision.v1.ProductSearch.ListReferenceImages`
- `google.cloud.vision.v1.ProductSearch.PurgeProducts`
- `google.cloud.vision.v1.ProductSearch.RemoveProductFromProductSet`
- `google.cloud.vision.v1.ProductSearch.UpdateProduct`
- `google.cloud.vision.v1.ProductSearch.UpdateProductSet`
- `google.cloud.vision.v1p1beta1.ImageAnnotator.AsyncBatchAnnotateFiles`
- `google.cloud.vision.v1p1beta1.ImageAnnotator.AsyncBatchAnnotateImages`
- `google.cloud.vision.v1p1beta1.ImageAnnotator.BatchAnnotateFiles`
- `google.cloud.vision.v1p1beta1.ImageAnnotator.BatchAnnotateImages`
- `google.cloud.vision.v1p2beta1.ImageAnnotator.AsyncBatchAnnotateFiles`
- `google.cloud.vision.v1p2beta1.ImageAnnotator.AsyncBatchAnnotateImages`
- `google.cloud.vision.v1p2beta1.ImageAnnotator.BatchAnnotateFiles`
- `google.cloud.vision.v1p2beta1.ImageAnnotator.BatchAnnotateImages`
- `google.cloud.vision.v1p3beta1.ImageAnnotator.AsyncBatchAnnotateFiles`
- `google.cloud.vision.v1p3beta1.ImageAnnotator.BatchAnnotateFiles`
- `google.cloud.vision.v1p3beta1.ImageAnnotator.BatchAnnotateImages`
- `google.cloud.vision.v1p3beta1.ProductSearch.AddProductToProductSet`
- `google.cloud.vision.v1p3beta1.ProductSearch.CreateProduct`
- `google.cloud.vision.v1p3beta1.ProductSearch.CreateReferenceImage`
- `google.cloud.vision.v1p3beta1.ProductSearch.DeleteProduct`
- `google.cloud.vision.v1p3beta1.ProductSearch.DeleteReferenceImage`
- `google.cloud.vision.v1p3beta1.ProductSearch.ListProductSets`
- `google.cloud.vision.v1p3beta1.ProductSearch.ListProductsInProductSet`
- `google.cloud.vision.v1p3beta1.ProductSearch.ListReferenceImages`
- `google.cloud.vision.v1p4beta1.ImageAnnotator.AsyncBatchAnnotateFiles`
- `google.cloud.vision.v1p4beta1.ImageAnnotator.AsyncBatchAnnotateImages`
- `google.cloud.vision.v1p4beta1.ImageAnnotator.BatchAnnotateFiles`
- `google.cloud.vision.v1p4beta1.ImageAnnotator.BatchAnnotateImages`
- `google.cloud.vision.v1p4beta1.ProductSearch.AddProductToProductSet`
- `google.cloud.vision.v1p4beta1.ProductSearch.CreateProduct`
- `google.cloud.vision.v1p4beta1.ProductSearch.CreateReferenceImage`
- `google.cloud.vision.v1p4beta1.ProductSearch.DeleteProductSet`
- `google.cloud.vision.v1p4beta1.ProductSearch.GetProduct`
- `google.cloud.vision.v1p4beta1.ProductSearch.GetReferenceImage`
- `google.cloud.vision.v1p4beta1.ProductSearch.ImportProductSets`
- `google.cloud.vision.v1p4beta1.ProductSearch.ListReferenceImages`
- `google.cloud.vision.v1p4beta1.ProductSearch.PurgeProducts`
- `google.cloud.vision.v1p4beta1.ProductSearch.UpdateProduct`

### undefined

#### `serviceName`

- `visionai.googleapis.com`

#### `methodName`

- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### Migrate for Compute Engine

#### `serviceName`

- `vmmigration.googleapis.com`

#### `methodName`

- `google.cloud.vmmigration.v1.VmMigration.AddGroupMigration`
- `google.cloud.vmmigration.v1.VmMigration.CancelCloneJob`
- `google.cloud.vmmigration.v1.VmMigration.CancelCutoverJob`
- `google.cloud.vmmigration.v1.VmMigration.CreateCloneJob`
- `google.cloud.vmmigration.v1.VmMigration.CreateCutoverJob`
- `google.cloud.vmmigration.v1.VmMigration.CreateDatacenterConnector`
- `google.cloud.vmmigration.v1.VmMigration.CreateGroup`
- `google.cloud.vmmigration.v1.VmMigration.CreateMigratingVm`
- `google.cloud.vmmigration.v1.VmMigration.CreateSource`
- `google.cloud.vmmigration.v1.VmMigration.CreateTargetProject`
- `google.cloud.vmmigration.v1.VmMigration.CreateUtilizationReport`
- `google.cloud.vmmigration.v1.VmMigration.DeleteDatacenterConnector`
- `google.cloud.vmmigration.v1.VmMigration.DeleteGroup`
- `google.cloud.vmmigration.v1.VmMigration.DeleteMigratingVm`
- `google.cloud.vmmigration.v1.VmMigration.DeleteSource`
- `google.cloud.vmmigration.v1.VmMigration.DeleteTargetProject`
- `google.cloud.vmmigration.v1.VmMigration.DeleteUtilizationReport`
- `google.cloud.vmmigration.v1.VmMigration.FetchInventory`
- `google.cloud.vmmigration.v1.VmMigration.FinalizeMigration`
- `google.cloud.vmmigration.v1.VmMigration.GetCloneJob`
- `google.cloud.vmmigration.v1.VmMigration.GetCutoverJob`
- `google.cloud.vmmigration.v1.VmMigration.GetDatacenterConnector`
- `google.cloud.vmmigration.v1.VmMigration.GetGroup`
- `google.cloud.vmmigration.v1.VmMigration.GetMigratingVm`
- `google.cloud.vmmigration.v1.VmMigration.GetSource`
- `google.cloud.vmmigration.v1.VmMigration.GetTargetProject`
- `google.cloud.vmmigration.v1.VmMigration.GetUtilizationReport`
- `google.cloud.vmmigration.v1.VmMigration.ListCloneJobs`
- `google.cloud.vmmigration.v1.VmMigration.ListCutoverJobs`
- `google.cloud.vmmigration.v1.VmMigration.ListDatacenterConnectors`
- `google.cloud.vmmigration.v1.VmMigration.ListGroups`
- `google.cloud.vmmigration.v1.VmMigration.ListMigratingVms`
- `google.cloud.vmmigration.v1.VmMigration.ListSources`
- `google.cloud.vmmigration.v1.VmMigration.ListTargetProjects`
- `google.cloud.vmmigration.v1.VmMigration.ListUtilizationReports`
- `google.cloud.vmmigration.v1.VmMigration.PauseMigration`
- `google.cloud.vmmigration.v1.VmMigration.RemoveGroupMigration`
- `google.cloud.vmmigration.v1.VmMigration.ResumeMigration`
- `google.cloud.vmmigration.v1.VmMigration.StartMigration`
- `google.cloud.vmmigration.v1.VmMigration.UpdateGroup`
- `google.cloud.vmmigration.v1.VmMigration.UpdateMigratingVm`
- `google.cloud.vmmigration.v1.VmMigration.UpdateSource`
- `google.cloud.vmmigration.v1.VmMigration.UpdateTargetProject`
- `google.cloud.vmmigration.v1.VmMigration.UpgradeAppliance`
- `google.longrunning.Operations.CancelOperation`
- `google.longrunning.Operations.DeleteOperation`
- `google.longrunning.Operations.GetOperation`
- `google.longrunning.Operations.ListOperations`

### VMware Engine

#### `serviceName`

- `vmwareengine.googleapis.com`

#### `methodName`

- `SetIamPolicy`
- `google.cloud.vmwareengine.v1.VmwareEngine.CreateCluster`
- `google.cloud.vmwareengine.v1.VmwareEngine.CreateExternalAddress`
- `google.cloud.vmwareengine.v1.VmwareEngine.CreateHcxActivationKey`
- `google.cloud.vmwareengine.v1.VmwareEngine.CreateNetworkPolicy`
- `google.cloud.vmwareengine.v1.VmwareEngine.CreatePrivateCloud`
- `google.cloud.vmwareengine.v1.VmwareEngine.DeleteCluster`
- `google.cloud.vmwareengine.v1.VmwareEngine.DeleteExternalAddress`
- `google.cloud.vmwareengine.v1.VmwareEngine.DeleteNetworkPolicy`
- `google.cloud.vmwareengine.v1.VmwareEngine.DeletePrivateCloud`
- `google.cloud.vmwareengine.v1.VmwareEngine.GetCluster`
- `google.cloud.vmwareengine.v1.VmwareEngine.GetNodeType`
- `google.cloud.vmwareengine.v1.VmwareEngine.GetPrivateCloud`
- `google.cloud.vmwareengine.v1.VmwareEngine.ListClusters`
- `google.cloud.vmwareengine.v1.VmwareEngine.ListNetworkPolicies`
- `google.cloud.vmwareengine.v1.VmwareEngine.ListPrivateClouds`
- `google.cloud.vmwareengine.v1.VmwareEngine.ResetNsxCredentials`
- `google.cloud.vmwareengine.v1.VmwareEngine.ResetVcenterCredentials`
- `google.cloud.vmwareengine.v1.VmwareEngine.ShowVcenterCredentials`
- `google.cloud.vmwareengine.v1.VmwareEngine.UndeletePrivateCloud`
- `google.cloud.vmwareengine.v1.VmwareEngine.UpdateCluster`
- `google.cloud.vmwareengine.v1.VmwareEngine.UpdateExternalAddress`
- `google.cloud.vmwareengine.v1.VmwareEngine.UpdateNetworkPolicy`
- `google.vmwareengine.authorize`

### Serverless VPC Access

#### `serviceName`

- `vpcaccess.googleapis.com`

#### `methodName`

- `google.cloud.location.Locations.ListLocations`
- `google.cloud.vpcaccess.v1.VpcAccessService.CreateConnector`
- `google.cloud.vpcaccess.v1.VpcAccessService.DeleteConnector`
- `google.cloud.vpcaccess.v1.VpcAccessService.GetConnector`
- `google.cloud.vpcaccess.v1.VpcAccessService.ListConnectors`
- `google.cloud.vpcaccess.v1beta1.VpcAccessService.CreateConnector`
- `google.cloud.vpcaccess.v1beta1.VpcAccessService.DeleteConnector`
- `google.cloud.vpcaccess.v1beta1.VpcAccessService.GetConnector`
- `google.cloud.vpcaccess.v1beta1.VpcAccessService.ListConnectors`
- `google.cloud.vpcaccess.v1beta1.VpcAccessService.UpdateConnector`

### Web Security Scanner

#### `serviceName`

- `websecurityscanner.googleapis.com`

#### `methodName`

- `google.cloud.websecurityscanner.v1.WebSecurityScanner.CreateScanConfig`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.DeleteScanConfig`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.GetFinding`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanConfig`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanRun`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStats`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanConfigs`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanRuns`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRun`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRun`
- `google.cloud.websecurityscanner.v1.WebSecurityScanner.UpdateScanConfig`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.CreateScanConfig`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.DeleteScanConfig`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanConfig`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanRun`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrls`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindings`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanConfigs`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRuns`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListStartingUrls`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRun`
- `google.cloud.websecurityscanner.v1beta.WebSecurityScanner.UpdateScanConfig`

### Workflow Executions

#### `serviceName`

- `workflowexecutions.googleapis.com`

#### `methodName`

- `google.cloud.workflows.executions.v1.Events.SendHttpCallback`
- `google.cloud.workflows.executions.v1.Executions.CancelExecution`
- `google.cloud.workflows.executions.v1.Executions.CreateExecution`
- `google.cloud.workflows.executions.v1.Executions.GetExecution`
- `google.cloud.workflows.executions.v1.Executions.ListExecutions`
- `google.cloud.workflows.executions.v1.Executions.TriggerPubsubExecution`
- `google.cloud.workflows.executions.v1beta.Executions.CancelExecution`
- `google.cloud.workflows.executions.v1beta.Executions.CreateExecution`
- `google.cloud.workflows.executions.v1beta.Executions.GetExecution`
- `google.cloud.workflows.executions.v1beta.Executions.ListExecutions`

### Workflows

#### `serviceName`

- `workflows.googleapis.com`

#### `methodName`

- `google.cloud.workflows.v1.Workflows.CreateWorkflow`
- `google.cloud.workflows.v1.Workflows.DeleteWorkflow`
- `google.cloud.workflows.v1.Workflows.GetWorkflow`
- `google.cloud.workflows.v1.Workflows.ListWorkflows`
- `google.cloud.workflows.v1.Workflows.UpdateWorkflow`
- `google.cloud.workflows.v1beta.Workflows.CreateWorkflow`
- `google.cloud.workflows.v1beta.Workflows.DeleteWorkflow`
- `google.cloud.workflows.v1beta.Workflows.GetWorkflow`
- `google.cloud.workflows.v1beta.Workflows.ListWorkflows`
- `google.cloud.workflows.v1beta.Workflows.UpdateWorkflow`


<!-- GENERATED END -->