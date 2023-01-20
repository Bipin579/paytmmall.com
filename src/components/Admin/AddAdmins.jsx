import { useDispatch } from "react-redux";
import { useToast,Select,FormControl,Input,Heading,FormLabel,Button,Option } from "@chakra-ui/react";
import { useState } from "react";
import { addAdmin } from "../../Redux/Admin/action";

const AddAdmins = () => {
  const dispatch = useDispatch();
  const initForm = { name: '', email: '', password: '', role: '',image: '',contactNo:''}
  const toast = useToast();
  const [form, setForm] = useState(initForm);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(addAdmin(form))
      toast({
        title: 'Admin Added',
        description: `${form.name} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.name} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }
  return (
    <div>
      <Heading size='md'>Add Products</Heading>
      <form onSubmit={formSubmitHandler}>
        <FormControl isRequired>
          {/* If I am not giving unique id than it's showing error but it's not showing the same in AddProducts form */}
          <FormLabel>Admin Name</FormLabel>
          <Input type='text' name='name' id='name' background='#fff' htmlSize={45} width='auto' onChange={formChangeHandler} value={form.name} />
          <FormLabel>Admin Image Link</FormLabel>
          <Input type='url' name='image' id='image' background='#fff' onChange={formChangeHandler} value={form.image} />
          <FormLabel>Admin Email</FormLabel>
          <Input type='email' name='email' id='email' background='#fff' onChange={formChangeHandler} value={form.email} />
          <FormLabel>Admin Contact No.</FormLabel>
          <Input type='number' name='contactNo' id='contactNo' background='#fff' onChange={formChangeHandler} value={form.contactNo} />
          <FormLabel>Admin Password</FormLabel>         
          <Input type='password' name='password' id='passoword' background='#fff' onChange={formChangeHandler} value={form.password} />
          <FormLabel>Admin Category</FormLabel>
          {/* I can also pass defaultValue to Select */}
          <Select placeholder="Select Role" name="role" id='role' background="cornflowerblue" onChange={formChangeHandler}>
            <option value='Technical'>Technical</option>
            <option value='Developer'>Developer</option>
            <option value='Project Manager'>Project Manager</option>
            <option value='Sales'>Sales</option>
            <option value='Customer Executive'>Custumer Executive</option>
          </Select>
          <Button type='submit' colorScheme='teal' marginTop='2'>Add</Button>
        </FormControl>
      </form>
    </div>)
}

export default AddAdmins;