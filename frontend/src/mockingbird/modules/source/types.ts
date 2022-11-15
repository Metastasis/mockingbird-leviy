export interface Source {
  name: string;
  description: string;
  service: string;
  request: any;
  init?: any[];
  shutdown?: any[];
}

export interface SourceFormData {
  name: string;
  description: string;
  request: string;
  init: string;
  shutdown: string;
}
