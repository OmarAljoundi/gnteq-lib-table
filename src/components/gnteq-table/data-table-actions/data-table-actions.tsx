
import * as React from "react"
import { Row } from "@tanstack/react-table";
import {  LucideIcon } from "lucide-react";
import Button from "../../gnteq-ui/Button/button";

interface DateTableActionProps<TData> {
  row: Row<TData>;
  actions: {
    label: string;
    action?: (() => Promise<{ success: boolean; message: string }>);
    link?: string;
    type?: "Link" | "Promise" | "Trigger";
    icon: LucideIcon;
  }[];
}

export default function DataTableAction<TData>({
  row,
  actions,
}: DateTableActionProps<TData>) {

  return (
      <div className="flex flex-auto gap-x-2 ">
        {actions?.map((i) => {
          switch (i.type) {
            case "Link":
              return (
               
                  <Button
                    size="sm"
                    variant="ghost"
                    key={i.label}
                  >
                    <i.icon className="w-4 h-4" />
                  </Button>
              );
            case "Promise":
              return (
                  <Button
                    size="sm"
                    variant="ghost"
                    key={i.label}
                    onClick={async () => {
                      //@ts-ignore
                      i.action()!
                    }}
                  >
                    <i.icon className="w-4 h-4" />
                  </Button>
              );
            case "Trigger":
              return (
                <Button
                  key={i.label}
                  size="sm"
                  variant="ghost"
                  //@ts-ignore
                  onClick={() => modal[i.action as string](row.original)}
                >
                  <i.icon className="w-4 h-4" />
                </Button>
              );
          }
        })}
      </div>
  );
}
