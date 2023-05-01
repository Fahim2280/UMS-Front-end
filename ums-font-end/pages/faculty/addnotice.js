export default function AddNotice() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [success, setSuccess] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("subject", data.subject);
    formData.append("details", data.details);
    try {
      const response = await axios.post(
        "http://localhost:3000/faculty/addnotice",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Notice add successfully");
      reset();
    } catch (error) {
      console.log(error.response.data.message);

      setSuccess("Notice add unsuccessfull " + error.response.data.message);
    }
  };

  return (
    <>
      <h2>Add Notice</h2>
      <form>
        <div>
          <label htmlFor=" subject"> Subject</label>
          <input type="text" name=" subject" id=" subject" />
        </div>
        <div>
          <label htmlFor=" details"> Details</label>
          <input type="text" name=" details" id=" details" />
        </div>
        <button type="submit">Add Notice</button>
      </form>
    </>
  );
}
