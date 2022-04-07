import { Global, Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { envConst, headerConst, apiAggregator } from '@hoory-com/hs-common';
import { GraphQLClient } from 'graphql-request';
// import { API_AGGREGATOR_CLIENT } from 'src/shared/const/app.const';
import * as api_aggregator from './graphql';

const factory = {
  provide: 'Sdk',
  useFactory: async () => {
    return api_aggregator.getSdk(
      new GraphQLClient('http://localhost:8080/v1/graphql', {
        // headers: {
        //   [headerConst.X_USER_ADMIN_SECRET]: configService.get(
        //     envConst.API_AGGREGATOR_ADMIN_SECRET,
        //   ),
        // },
      }),
    );
  },
};

@Global()
@Module({
  imports: [],
  providers: [factory],
  exports: [factory],
})
export class ApiAggregatorModule {}
