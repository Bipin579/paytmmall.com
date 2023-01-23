import Chart from "react-google-charts";
import { Heading,Box ,CircularProgress} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Admin/action";

const Analyse = () => {
  const {isLoadingCategories,categories} = useSelector(store=>store.AdminReducer);
  const {allCategories,usersCategories} =categories;
  const dispatch=useDispatch();

  const data1=[["Category", "Annually"]];
  const arr1=[];
  for(let key in usersCategories){
    arr1.push(key)
    data1.push([key,usersCategories[key]]);
  }

  for(let i of allCategories){
    if(!arr1.includes(i)){
      data1.push([i,0])
    }
  }
  
  useEffect(()=>{
    dispatch(getCategories);
  },[])

// console.log(Object.keys(categories)[0].valueOf('allCategories'))
  return (
    <div>
      <Heading size='lg'>Analyse</Heading>
      {isLoadingCategories && <CircularProgress isIndeterminate color='green.300' />}
      {/*How to know in the object is value is empty or not */}
      {<Box width={'60vw'}>
      <Chart chartType="PieChart" data={data1}  height={'60vh'} options={{title:"Top Buyest Product Category's"}} />
      </Box>}
    </div>
  )
}

export default Analyse;
