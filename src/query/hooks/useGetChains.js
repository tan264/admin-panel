import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useGetChains = () => {
    return useQuery(
        ['chains'], async () => {
            const {data} = await axios.get('http://api.cmcati.vn/admin/chain')
            return data;
        },
        {
            retry: 1,
        });
}