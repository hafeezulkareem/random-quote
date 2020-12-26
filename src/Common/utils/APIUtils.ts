import axios from "axios";

import { apiMethods } from "../constants/APIMethods";

const axiosInstance = axios.create({
   baseURL: "https://quote-garden.herokuapp.com/api/v3",
});

export async function makeAPIRequest(
   endpoint: string,
   apiMethod: string,
   params = {}
) {
   const headers = { "Content-Type": "application/json" };

   switch (apiMethod) {
      case apiMethods.get:
         try {
            const response = await axiosInstance.get(endpoint, {
               headers,
               params,
            });
            return response.data;
         } catch (error) {
            return error;
         }
   }
}
