"use server";

import { revalidatePath } from "next/cache";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unblockUser } from "@/lib/block-service"


export const onBlock = async (id: string) => {
    const self = await getSelf();

    let blockedUser;

    blockedUser = await blockUser(id);

    try {
    } catch {
        // This means user is not in the room
    }

    revalidatePath(`/u/${self.username}/community`);

    return blockedUser;
};

export const onUnblock = async (id: string) => {
    const self = await getSelf();
    const unblockedUser = await unblockUser(id);

    revalidatePath(`/u/${self.username}/community`);
    return unblockedUser;
};