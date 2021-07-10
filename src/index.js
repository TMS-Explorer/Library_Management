import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import logo from './Front.jpg';
//import reportWebVitals from './reportWebVitals';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { blueGrey } from '@material-ui/core/colors';
import { CardContent } from '@material-ui/core';
import { data } from 'jquery';


const usestyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:400,
    // marginTop:20,
    // marginBottom:20,
    // marginLeft:20,
    // marginRight:20
    margin:'20px,20px,20px,20px'
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: '5px 5px 5px 5px',
    maxWidth: 500,
    variant: 'elevation',
    square: false
  },
  card:{
    width:400,
    height:400,
        backgroundColor:'bluegrey'
    },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '203px',
    maxHeight: '269px',
  },
}));
const pics=[
  {
    Id:1,
    Name:'./Pic1.jpg',
    BName:'Goodnight Moon',
    Author:'Margaret Brown ',
    yop:1947
  },
  {
    Id:2,
    Name:'./Pic2.jpg',
  BName:' The Very Hungry Caterpillar',
  Author:'Eric Carle',
  yop:1969
  },
  {
    Id:3,
    Name:'./Pic3.jpg',
  BName:'Where the Wild Things Are',
  Author:'Maurice Sendak',
  yop:1963
  },
  {
    Id:4,
    Name:'./Pic4.jpg',
  BName:'The Cat in the Hat',
  Author:'Dr. Seuss',
  yop:1957
  },
  {
    Id:5,
    Name:'./Pic5.jpg',
  BName:' Charlotte’s Web',
  Author:'E. B. White',
  yop:1952
  },
  {
    Id:6,
    Name:'./Pic6.jpg',
  BName:'Harold and the Purple Crayon',
  Author:'Crockett Johnson',
  yop:1955
  },
  {
    Id:7,
    Name:'./Pic7.jpg',
  BName:'Charlie and the Chocolate Factory',
  Author:'Roald Dahl',
  yop:1964
  },
  {
    Id:8,
    Name:'./Pic8.jpg',
    BName:'Little Women',
    Author:'Louis May Alcott',
  yop:1880
  },
  {
    Id:9,
    Name:'./Pic9.jpg',
  BName:'Harry Potter and the Philosopher’s Stone',
  Author:' J. K. Rowling',
  yop:1997
  },
  {
    Id:10,
    Name:'./Pic10.jpg',
  BName:'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
  Author:'C.S.Lewis',
  yop:1950
  }];
  
  class ComplexGrid extends React.Component {
  constructor(props){
    super(props);
    
    }
    // onClickGridComponent=(id)=>
    // {
    //   const el=<Details Id={id}></Details>
    //   ReactDOM.render(el,document.getElementById('root'));
    // }
   
    render(){
  
      return (
        <div className={this.props.classes.root}>
            
            
            <Grid container noGutters="true">
              {pics.map((pic)=>(
               <Card Width="400" Height="400">
                 <CardContent> 
              <Grid container Width="400" Height="400" >
                <Grid item >
                  <ButtonBase className={this.props.classes.image}>
                    <img Width= "203px" Height= "269px" alt="complex" src={pic.Name} />
                  </ButtonBase>
                </Grid>
                
                    <Grid item xs container direction="column" spacing={2} alignContent="center" Width= "197px" Height= "131px">
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          <b>{pic.BName}</b>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          <b>Author Name:</b> {pic.Author}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          <b>Year of Publication:</b>{pic.yop}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                     </CardContent> 
                </Card>
              ))}
              </Grid>
              
          </div>  
      );
    }
    

}


// class Details extends React.Component{
//   constructor(props)
//   {
//     super(props);
//   }
//   searchdata=(id)=>{
//     let obj = pics.find(o => o.Id === id);
//     return obj;
//   }
  
//   render()
//   {
//     let data=this.searchdata(this.props.Id) ; 
//     return(
      
//       <div>
//         {data.Author}
//       </div>
      
      
//     )
//   }
// }

const ele = <ComplexGrid classes={usestyles}></ComplexGrid>
ReactDOM.render(ele,document.getElementById('root'));