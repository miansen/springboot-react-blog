
import logging

LOG_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
logging.basicConfig(level=logging.DEBUG, format=LOG_FORMAT)

class Logger(object):

    # DEBUG
    def getDebugLog(self,msg):
        return logging.debug(msg)

    # ERROR
    def getErrorLog(self,msg):
        return logging.error(msg)

if __name__ == '__main__':
    Logger().getDebugLog("aa")
    Logger().getErrorLog("bb")