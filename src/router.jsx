import Index from './Route/Index/Index';
import Charts from './Route/Charts/Charts';
import ChartScore from './Route/ChartScore/ChartScore';
import AddChart from './Route/Admin/AddChart/AddChart';
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
      path: "/charts/:chartId/score",
      element: <ChartScore />,
    },
    {
      path: "/how-to",
      element:<div>How to - Work In progress</div>,
    },
    {
      path: "/admin/charts/add",
      element: <AddChart />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
]

export default router;
