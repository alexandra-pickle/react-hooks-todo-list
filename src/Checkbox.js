const Checkbox = ({ checked, setChecked }) => {
  function handleClick() {
    return setChecked(!checked);
  }

  return (
    <div>
      <form>
        <input type="checkbox" checked={checked} onChange={handleClick} />
      </form>
    </div>
  );
};

export default Checkbox;
