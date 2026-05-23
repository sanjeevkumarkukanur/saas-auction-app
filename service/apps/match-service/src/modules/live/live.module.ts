import { Module } from '@nestjs/common';
import { LiveGateway } from './live.gateway';
import { LiveService } from './live.service';

@Module({
  providers: [LiveGateway, LiveService],
  exports: [LiveService],
})
export class LiveModule {}

// import { io } from "socket.io-client";

// const socket = io("http://localhost:4003/live");

// socket.emit("join.match", "match-id");

// socket.on("score.updated", (data) => {
//   console.log("Live Score:", data);
// });

// socket.on("timeline.updated", (data) => {
//   console.log("Timeline:", data);
// });

// socket.on("match.completed", (data) => {
//   console.log("Match Completed:", data);
// });
