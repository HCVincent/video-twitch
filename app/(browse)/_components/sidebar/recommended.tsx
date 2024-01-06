"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommendedProp {
  data: User[];
}

export const Recommended = ({ data }: RecommendedProp) => {
  const { collapsed } = useSidebar((state) => state);
  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <div key={user.id}>
            <UserItem
              key={user.id}
              username={user.username}
              imageUrl={user.imageUrl}
              isLive={true}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {/* Array(3): Again, this creates an array with 3 empty slots.
.map(...): Here's where the problem arises. The map function in JavaScript skips over empty slots in the array. So, if you call map directly on an array created with the Array constructor, it won't execute the callback function for these empty slots, and you end up with nothing rendered for those slots.[...Array(3)]: Using the spread operator ... in this context converts these empty slots into undefined values. So, the array you're actually mapping over is [undefined, undefined, undefined]. */}
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
