import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserUpdate, IUser, IUserMessenger, IUserActivation } from "../interfaces/users";

export const newUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().min(2).max(100).required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdmin: yup.boolean().default(false),
    isActive: yup.boolean().default(false)
});

export const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string()
});

export const activationUserSchema: SchemaOf<IUserActivation> = yup.object().shape({
    isActive: yup.boolean()
});

export const userResponseSchema: SchemaOf<IUser> = yup.object().shape({
    updatedAt: yup.date(),
    createdAt: yup.date(),
    isActive: yup.boolean(),
    isAdmin: yup.boolean(),
    email: yup.string().email(),
    name: yup.string(),
    id: yup.string()
});

export const userMessengerSchema: SchemaOf<IUserMessenger> = yup.object().shape({
    createdAt: yup.date(),
    name: yup.string(),
    id: yup.string()
});

export const userListSchema: SchemaOf<IUser[]> = yup.array(
    yup.object().shape({
        updatedAt: yup.date(),
        createdAt: yup.date(),
        isAdmin: yup.boolean(),
        isActive: yup.boolean(),
        email: yup.string().email(),
        name: yup.string(),
        id: yup.string()
    })
);