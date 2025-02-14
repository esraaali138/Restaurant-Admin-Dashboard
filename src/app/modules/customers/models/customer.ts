export interface Customer {
  CustomerID?: string;
  CustomerName: string;
  JoinDate?: string;
  Location: string;
  TotalSpent: any;
  LastOrder?: any;
  [key: string]: any;
  selected : boolean
}
