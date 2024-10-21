export interface userType {
    id: string;
    name: string;
    avatar: string;
}

export interface obj {
    name: string;
    id: string;
}

export interface dummayTask {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
    active: string
}

export interface addTask {
    Title: string;
    Summary: string;
    DueDate: string;
}