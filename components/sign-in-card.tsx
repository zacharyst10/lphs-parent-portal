import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Parent Portal</CardTitle>
        <CardDescription>
          Please sign in to continue to the parent portal.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">{children}</Button>
      </CardFooter>
    </Card>
  );
}
