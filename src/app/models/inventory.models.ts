export interface InventoryItem {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  items: Item[];
}

export interface Item {
  id: number;
  borrowPeriodStart?: Date;
  borrowPeriodEnd?: Date;
}
