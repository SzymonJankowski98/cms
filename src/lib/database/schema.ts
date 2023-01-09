import { Schema } from "mongoose";

export interface IPage{
    _id: string;
    name: string;
    pageContent: any;
};
  
export interface IUser{
    _id: string;
    username: string;
    hash: string;
};

export const pageSchema = new Schema<IPage>({
    name: { type: String, required: false},
    pageContent: {type: Object, required: true}
});

export const userSchema = new Schema<IUser>({
    username: { type: String, required: true},
    hash: {type: String, required: true}
});