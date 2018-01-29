
export const updatevote = (vote) => {
  return {
    type: 'UPDATE_VOTE',
    vote,
  }
}

export const updateVote = (user_id, count, vote_id) => {
  console.log("in updateCount", typeof count)
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/users/${user_id}/votes/${vote_id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"number_of_votes": `${count}` })
    })
    .then(response => response.json())
    .then(votes => dispatch(updatevote(votes)))
    .then(error => console.log(error))
  }
}
