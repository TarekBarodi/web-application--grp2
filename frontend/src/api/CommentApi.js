import Api from "./Api";

class CommentsApi {
    getAllComments() {
        return Api.get('/comments');
    }

    getCommentByPostId(id) {
        return Api.get('/comments?postId='+id);
    }

    createComment(comment) {
        return Api.post('/comments', comment);
    }

    updateComment(comment) {
        return Api.put('/comments', comment);
    }

    deleteComment(id) {
        return Api.delete('/comments/'+id);
    }
}

export default new CommentsApi();
