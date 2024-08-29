import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { defaultValues, schema, Schema } from "../types/schema";
import { Users } from "./Users";

const UsersProvider = () => {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
};

export default UsersProvider;
