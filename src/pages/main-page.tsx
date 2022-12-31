import generateRandomNumber from '@utils/random-generator';

const MainPage = () => {
  interface IPerson {
    name: string;
    age: number;
  }

  const randomPersonNames = ['foo', 'bar', 'john', 'doe', 'alice', 'bob'];

  const generatePerson = (min: number, max: number): IPerson => {
    const randomNameIndex = generateRandomNumber(0, randomPersonNames.length - 1);
    return {
      name: randomPersonNames[randomNameIndex],
      age: generateRandomNumber(min, max),
    };
  };

  const person = generatePerson(10, 20);
  return (
    <div>
      <h1 className="font-semibold text-3xl text-blue-600">Hello World</h1>
      <div>The person is {person && person.name}</div>
      <div>The person is {person && person.age}</div>
    </div>
  );
};

export default MainPage;
