import Index from './Route/Index/Index';
import Charts from './Route/Charts/Charts';
import ChartScore from './Route/ChartScore/ChartScore';
import NotFound from './Route/NotFound/NotFound';

const router = [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/charts",
      element: <Charts />,
    },
    {
      path: "/charts/:chartId",
      element: <ChartScore />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
]

export default router;
