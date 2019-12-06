export function handleClick(){
    if(this.state.show === 'none'){
      this.setState({show: 'block'});
    }else{
      this.setState({show:'none'});
    }
}

export default { handleClick };