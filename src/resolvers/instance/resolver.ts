import { Instance } from "../../models/instance";
import { AxiosInstance } from "axios";
import { ListInstancesResponse } from "./types";

export interface InstanceResolverType {
  list(): Promise<{ instance: Instance }[]>;
}

export class InstanceResolver implements InstanceResolverType {
  constructor(private api: AxiosInstance) {}

  async list(): Promise<ListInstancesResponse> {
    try {
      const response = await this.api.get("/instance/fetchInstances");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
