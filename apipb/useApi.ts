import useSWR, { SWRResponse } from "swr";
import * as apipb from "../apipb/api";

export function useGetTutorial(
  api: apipb.Tutorials,
  object?: apipb.DeepPartial<apipb.GetTutorialRequest>
): SWRResponse<apipb.Tutorial, Error> {
  return useSWR(object, api.GetTutorial);
}

export function useListTutorials(
  api: apipb.Tutorials,
  object?: apipb.DeepPartial<apipb.ListTutorialsRequest>
): SWRResponse<apipb.ListTutorialsResponse, Error> {
  return useSWR(object, api.ListTutorials);
}
