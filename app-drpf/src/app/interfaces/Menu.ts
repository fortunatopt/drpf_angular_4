export interface Menu {
    'Parent': number;
    'menuItems': Array<Menu>;
    'Id': number;
    'ParentId': number;
    'SortField': number;
    'menuName': string;
    'itemURL': string;
    'isActive': boolean;
  }