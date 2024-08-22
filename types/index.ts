import { ChangeEventHandler, MouseEventHandler, TextareaHTMLAttributes } from "react";
import * as DocumentPicker from 'expo-document-picker';
import { ImagePickerAsset } from "expo-image-picker";

export type Stack = {
    id: number;
    st: string;
}

export type FormFieldType = { 
    label : string; 
    type : string; 
    value? : string | Stack[] | ImagePickerAsset;
    onchange : (value: string) => void
}

export type SubmitButtonProps = {
    label : string;
    handleSubmit : MouseEventHandler<HTMLButtonElement>;
}

export type ProjectType = {
    projectName: string;
    description: string;
    fullDescription: string;
    technologie: Stack[];
    urlOfSite: string;
    demoUrl: string;
    file: ImagePickerAsset | null; 
    BearerToken: string;
}

export type CommentType = {
    peopleName: string;
    peopleWorkstation: string;
    comment: string;
    file: ImagePickerAsset | null; 
    BearerToken: string;
}

export type ExperianceType = {
    experianceName: string;
    description: string;
    file: ImagePickerAsset | null; 
    BearerToken: string;
}

export type TabIconType = {
    icon : string;
    color : string;
    name : string;
    focused : boolean;
}