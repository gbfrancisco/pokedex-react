import unown_o from '../assets/media/unown_o.png';
import unown_p from '../assets/media/unown_p.png';
import unown_s from '../assets/media/unown_s.png';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex mb-8">
        <img alt="" src={unown_o} style={{ width: '9rem' }} />
        <img alt="" src={unown_o} style={{ width: '9rem' }} />
        <img alt="" src={unown_p} style={{ width: '9rem' }} />
        <img alt="" src={unown_s} style={{ width: '9rem' }} />
      </div>
      <div>
        <div className="font-bold mb-5 text-6xl text-center">ERROR: 404</div>
        <div className="text-3xl text-center">This page does not exist</div>
      </div>
    </div>
  );
};

export default ErrorPage;
