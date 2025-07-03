export enum MenuType {
    Sm,
    Large,
}

export interface MenuLink {
    label: string;
    link: string;
}

export interface MenuItemWithImage extends MenuLink {
    img: string;
}

export interface MenuCategory {
    category: string;
    links: MenuLink[];
}

export interface MenuItem {
    title: string;
    menuType?: MenuType;
    items?: MenuItemWithImage[];
    categories?: MenuCategory[];
    links?: MenuLink[];
    singleLink?:string
}

