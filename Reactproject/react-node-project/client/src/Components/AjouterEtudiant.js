import React, { Component } from "react";
import EtudiantCreatePage from "../Components/EtudiantCreatePage";

export default class AjouterEtudiant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.newEtudiant = this.newEtudiant.bind(this);

    this.state = {
      id: null,
      title: "",
      dateofBirth: "",
      placeofBirth: "",
      description: "", 
      published: false,
      submitted: true
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDateofBirth(e) {
    this.setState({
      dateofBirth: e.target.value
    });
  }
  onChangeplaceofBirth(e) {
    this.setState({
      placeofBirth: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }


  newEtudiant() {
    this.setState({
      id: null,
      name: "",
      dateofBirth: "",
      placeofBirth: "",
      description: "",
      coverImage:"",
      published: false,

      submitted: false
    });
  }

  render() {
  return(    
    <div>
   <EtudiantCreatePage/> 
</div>
);
}
}