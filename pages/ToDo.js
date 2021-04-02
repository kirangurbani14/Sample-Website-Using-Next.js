import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json();
  return{
    props: { todo: data}
  }
}

const toDo = ( { todo }) => {
  return ( 
      <div className={styles.container}>
        <Typography align="center" variant="h4">
      TODO List
      </Typography>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

        {todo.map(t =>(
         
         <TableRow key={t.id}>
         <TableCell component="th" scope="row">
           {t.id}
         </TableCell>
         <TableCell component="th" scope="row">
           {t.title}
         </TableCell>
         <TableCell component="th" scope="row">
           <button>Done</button>
         </TableCell>
         <TableCell>
         <button>Delete</button>
         </TableCell>
           </TableRow> 
           ))}
         
      
           </TableBody>
           </Table>
      </TableContainer>
        
        
      </div>
   );
}
 
export default toDo;
 


