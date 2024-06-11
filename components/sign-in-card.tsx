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
import { SignInButton } from "@clerk/nextjs";

export function SignInCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Lone Peak Chevaliers Parent Portal</CardTitle>
          <CardDescription>
            Please sign in to continue to the parent portal.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-center">
          <Button>
            <SignInButton />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
