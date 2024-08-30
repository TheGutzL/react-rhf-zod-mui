import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { defaultValues, schema, Schema } from "../types/schema";
import { Users } from "./Users";
import {DevTool} from '@hookform/devtools';

const UsersProvider = () => {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Users />
      <DevTool control={methods.control}/>
    </FormProvider>
  );
};

export default UsersProvider;
