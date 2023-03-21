import App from './Route/Index/Index';
import Score from './Route/Score/Score';

const router = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/score/:chartId",
      element: <Score />,
    }
]

export default router;
