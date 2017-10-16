constructor(props) {
  super(props);
  this.state = {
    members: []
  };
}
componentWillMount() {
  console.log("componentdidmount", this.props.newMembers)
  this.setState({
    members: this.props.newMembers
  })
  console.log(this.state.members)

}


render() {
  console.log("inside render props", this.props.newMembers)
  console.log("inside render state", this.state.members)
  const theList = this.state.members.map((member, index) => <eachMember username={member.username} user_id={member.id} key={index} />);

  return(
    <div>
    {theList}
    </div>
  )
}

}
