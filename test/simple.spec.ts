import "jest"
import { Message } from "../src/message";

test('should be boom', () => {
    let msg = new Message();
    expect(msg.getMessage()).toBe("Boom!")
})