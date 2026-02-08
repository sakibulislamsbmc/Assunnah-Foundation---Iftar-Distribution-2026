
export interface Volunteer {
  spotCode: string;
  name: string;
  mobile: string;
  district: string;
  upazila: string;
}

export interface GuidelineStep {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface PackageItem {
  name: string;
  quantity: string;
  icon: string;
}
