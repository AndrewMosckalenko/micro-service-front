import { api } from "../../api";
import { DOCUMENT_PATH } from "../../paths";


export function getDocumentsRequest() {
    return api.get(DOCUMENT_PATH);
}