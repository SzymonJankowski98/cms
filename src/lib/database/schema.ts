import { Schema } from "mongoose";

export interface IPage{
    _id: string;
    name: string;
    pageContent: any;
};
  
export const pageSchema = new Schema<IPage>({
    name: { type: String, required: false},
    pageContent: {type: Object, required: true}
});