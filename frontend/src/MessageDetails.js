const MessageDetails = ({ message }) => {
  return (
    <>
      {message && <p>Message is: {message}</p>}
      <p>Message has got length {message.length}</p>
    </>
  )
}

export default MessageDetails;