import { exChange } from 'service/service';

export const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.currency.value;
    const arrDara = data.split(' ');
    const to = arrDara[3];
    const from = arrDara[1];
    const amount = arrDara[0];

    exChange(to, from, amount).then(data => console.log(data));
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input name="currency" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
