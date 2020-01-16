export interface WorkDetailModel {
  employer: string;
  endDate?: Date;
  position: string;
  responsibilities: WorkResponsibilityModel[];
  startDate: Date;
}

export interface WorkResponsibilityModel {
  text: string;
  subtext?: string[];
}
