export interface AboutFollow {
    'aboutustext': string;
    'followusitems': Array<FollowItem>;
}

export interface FollowItem {
    'Id': number;
    'itemName': string;
    'itemSub': string;
    'itemURL': string;
    'itemClass': string;
    'isActive': boolean;
    'footerSection': number;
    'sortOrder': number;
}

export interface ContactInfo {
    'email': string;
    'phone': string;
    'address': string;
}

export interface FooterLink {
    'Id': number;
    'itemName': string;
    'itemSub': string;
    'itemURL': string;
    'itemClass': string;
    'isActive': boolean;
    'footerSection': number;
    'sortOrder': number;
}