import axios from "axios";
import {history} from "../../helpers";

export const Delete = (postID, username) => {
    axios.delete(`https://readme-writeme.appspot.com/api/post/delete/${postID}`)
        .then(data => {
            history.push(`/post/@${username}`)
        })
        .catch(error => {
            return alert('글을 삭제할 수 없습니다.');
        });
};
