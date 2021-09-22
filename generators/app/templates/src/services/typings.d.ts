// @ts-ignore
/* eslint-disable */

declare namespace API {
  import integer = Protocol.integer;
  type User = {
    id: number;
    login?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    balancer?: string;
    phoneNumber?: string;
    displayName?: string;
    imageUrl?: string;
    activated?: boolean;
    langKey?: string;
    createdBy?: string;
    createdDate?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    authorities?: string[];
    letterTemplates?: string[];
  };

  type UserList = {
    data?: User[];
    total?: number;
    success?: boolean;
  };

  type ImportedRecord = {
    id: number;
    batchName?: string;
    totalRecords?: number;
    sorceFile?: string;
    status?: string;
    letterTemplateName?: string;
    letterTemplatePros?: string;
    letterTemplateSmsTemplate?: string;
    letterTemplateSmsProps?: string;
    letterTemplateEmailTemplate?: string;
    letterTemplateEmailProps?: string;
    createDate?: string;
    updateDate?: string;
    createBy?: string;
    updateBy?: string;
    retryTimes?: number;
    lawCases?: string;
    user?: string;
    file?: string;
    fileContentType?: string;
    tips?: string;
    failedTotal?: number;
    cases?: string;
  };

  type ImportedRecordList = {
    data?: ImportedRecord[];
    total?: number;
    success?: boolean;
  };

  type LawCase = {
    id: number;
    shortId: string;
    name: string;
    pdf: string;
    md5: string;
    status: string;
    caseLegacyId: string;
    caseUserName: string;
    caseUserMobile: string;
    caseUserUid: string;
    caseOtherProps: string;
    createDate: string;
    updateDate: string;
    createBy: string;
    updateBy: string;
    notifications: string;
    viewedRecords: string;
    importedRecord: string;
    peopleInCase: string;
    user: string;
  };

  type LawCaseList = {
    data?: ImportedRecord[];
    total?: number;
    success?: boolean;
  };
}
