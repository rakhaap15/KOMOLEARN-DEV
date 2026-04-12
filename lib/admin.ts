import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_37Ni0MxktViAe1kuFruOxRs02os",
];

export const getIsAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}